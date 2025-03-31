"use client";

import Link from "next/link";
import Header from "../components/Header.js";
import { useState, useEffect } from "react";
import styles from "./DecisionFinder.module.css";
import DataCollectionPopup from "../components/DataCollectionPopup";
import { getDecisionTreeNodeById, getQuestionAnswerList, getResources, getNodeResourceList } from "../api.js"; 

export default function DecisionFinder() {
    const [history, setHistory] = useState([1]); // Ensure Node 1 is always stored initially
    const [currentNode, setCurrentNode] = useState(null); // Holds the current decision node
    const [choices, setChoices] = useState([]); // Holds available choices for the node
    const [resources, setResources] = useState([]); // Holds resources linked to the node
    const [isSurveyOpen, setSurveyOpen] = useState(false);

    // Function to calculate progress dynamically
    const calculateProgress = () => {
        if (!currentNode) return 0; // If no node is loaded yet, progress is 0%

        const currentStep = history.length - 1; // Steps taken
        const remainingSteps = currentNode.isLeaf ? 0 : 2; // Assume 2 more steps if not a leaf
        const totalSteps = currentStep + remainingSteps;

        return (currentStep / totalSteps) * 100;
    };

    // Fetch decision node data
    const fetchNode = async (nodeId) => {
        try {
            // Fetch the current node
            const currentNode = await getDecisionTreeNodeById(nodeId);
            setCurrentNode(currentNode);

            // Fetch choices (answers leading to next nodes)
            const qaList = await getQuestionAnswerList();
            const fetchedChoices = qaList.filter((questionAnswer) =>
                nodeId === questionAnswer.parentNode
            );
            setChoices(fetchedChoices);

            // Fetch resources linked to this node
            const fetchedResources = await getNodeResourceList();
            const resourceData = fetchedResources.filter((pairs) =>
                pairs.nodeId === nodeId
            );
      
            // Ensure resourceData is always an array before mapping
            const resourceIds = Array.isArray(resourceData) 
                ? resourceData.map((entry) => entry.resourceId) 
                : [];

            if (!resourceIds || resourceIds.length === 0) {
                setResources([]);
                return;
            }

            const resAll = await getResources();
            const matchedResources = resAll.filter((resource) =>
                resourceIds.includes(resource.resourceId)
            );

            setResources(matchedResources);

        } catch (error) {
            console.error("Error loading decision tree:", error);
        }
    };

    // Handles user choice and moves to the next node
    const handleChoice = (childNodeId) => {
        setHistory((prev) => [...prev, childNodeId]); // Store history for back navigation
        fetchNode(childNodeId); // Load the selected node
    };

    // Handles back button functionality
    const handleBack = () => {
        if (history.length > 1) {
            const newHistory = history.slice(0, -1);
            setHistory(newHistory);
            fetchNode(newHistory[newHistory.length - 1]); // Load the previous node
        }
    };

    // Handle external resource link click
    const handleExternalLinkClick = (event, link) => {
        event.preventDefault();
        setSurveyOpen(true);
        setTimeout(() => window.open(link, "_blank", "noopener,noreferrer"), 300);
    };

    // Load the first node when the page loads
    useEffect(() => {
        fetchNode(1); // Start decision tree at node ID 1
    }, []);

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.contentBox}>
                <h1 className={styles.title}>Solution Finder</h1>

                {/* Progress Bar */}
                <div className={styles.progressBarContainer}>
                    <div className={styles.progressBar} style={{ width: `${calculateProgress()}%` }} />
                </div>

                {/* Display the current question or result */}
                {currentNode && (
                    <>
                        <p className={styles.question}>{currentNode.question}</p>

                        {/* If node is NOT a leaf (question), show choices */}
                        {!currentNode.isLeaf && choices.map((choice, index) => (
                            <button 
                                key={index} 
                                className={styles.button} 
                                onClick={() => handleChoice(choice.childNode)}
                            >
                                {choice.answer}
                            </button>
                        ))}

                        {/* If node IS a leaf, display resources */}
                        {currentNode.isLeaf && resources.length > 0 && (
                            <div className={styles.result}>
                                <p>📌 Recommended Resources:</p>
                                {resources.map((resource, index) => (
                                    <Link 
                                        key={index} 
                                        href={resource.url} 
                                        onClick={(event) => handleExternalLinkClick(event, resource.url)}
                                        className={styles.link}
                                    >
                                        {resource.title}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* Back button */}
                        {history.length > 1 && (
                            <button className={styles.backButton} onClick={handleBack}>
                                ⬅ Back
                            </button>
                        )}
                    </>
                )}
            </div>
            {<DataCollectionPopup isOpen={isSurveyOpen} onClose={() => setSurveyOpen(false)} />}
        </div>
    );
}