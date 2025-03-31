"use client";

import Link from "next/link";
import Header from "../components/Header.js";
import { useState, useEffect } from "react";
import styles from "./DecisionFinder.module.css";
import DataCollectionPopup from "../components/DataCollectionPopup";
import { getNodeResourceById, getDecisionTreeNodeById, getQuestionAnswerList } from "../api.js"; 

export default function DecisionFinder() {
    const [history, setHistory] = useState([]); // Tracks user choices
    const [currentNode, setCurrentNode] = useState(null); // Holds the current decision node
    const [choices, setChoices] = useState([]); // Holds available choices for the node
    const [resources, setResources] = useState([]); // Holds resources linked to the node
    const [isSurveyOpen, setSurveyOpen] = useState(false);

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
            )
            setChoices(fetchedChoices);

            //TODO
            // // Fetch resources linked to this node
            // const fetchedResources = await getNodeResourceById(nodeId);
            // setResources(fetchedResources);

        } catch (error) {
            console.error("Error loading decision tree:", error);
        }
    };

    // Handles user choice and moves to the next node
    const handleChoice = (childNodeId) => {
        setHistory((prev) => [...prev, childNodeId]); // Store history for back navigation
        console.log("child node clicked: ", childNodeId);
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


// "use client";

// import Link from 'next/link';
// import Header from '../components/Header.js';
// import { useState } from 'react';
// import styles from './DecisionFinder.module.css'; 
// import DataCollectionPopup from "../components/DataCollectionPopup";


// export default function DecisionFinder() {
//     const [history, setHistory] = useState(['start']);
//     const [isSurveyOpen, setSurveyOpen] = useState(false);

//     const handleExternalLinkClick = (event, link) => {
//         event.preventDefault(); // Prevent default navigation
//         setSurveyOpen(true); // Open survey popup

//         // Open the link in a new tab after a short delay
//         setTimeout(() => {
//             window.open(link, "_blank", "noopener,noreferrer");
//         }, 300);
//     };

//     const handleChoice = (nextStep) => {
//         setHistory((prev) => [...prev, nextStep]);
//     };
//     const handleBack = () => {
//         if (history.length > 1) {
//             setHistory((prev) => prev.slice(0, -1));
//         }
//     };
//     const stepMapping = {
//         start: 3, // Estimated remaining steps from "start"
//         "30day": 2,
//         "3day": 2,
//         "yes30day": 0,
//         "no30day": 0,
//         "yes3day": 0,
//         "no3day": 2,
//         "yesMediation": 0,
//         "noMediation": 0
//     };
//     const step = history[history.length - 1];
//     const currentStep = history.length - 1;
//     const remainingSteps = stepMapping[step] || 0;
//     const totalSteps = currentStep + remainingSteps;
//     const progress = (currentStep / totalSteps) * 100;
    

//     return (
//         <div className={styles.container}>
//             <Header/>
//             <div className={styles.contentBox}>
//                 <h1 className={styles.title}>Solution Finder</h1>
                
//                 {step === 'start' && (
//                     <>
//                         <p className={styles.question}>Do you have a 3 or 30 day notice?</p>
//                         <button className={styles.button} onClick={() => handleChoice('30day')}>
//                             30 Day Notice
//                         </button>
//                         <button className={styles.button} onClick={() => handleChoice('3day')}>
//                             3 Day Notice
//                         </button>
//                     </>
//                 )}

//                 {step === '30day' && (
//                     <>
//                         <p className={styles.question}>Is your housing subsidized?</p>
//                         <button className={styles.button} onClick={() => handleChoice('yes30day')}>
//                             Yes
//                         </button>
//                         <button className={styles.button} onClick={() => handleChoice('no30day')}>
//                             No
//                         </button>
//                     </>
//                 )}

//                 {step === '3day' && (
//                     <>
//                         <p className={styles.question}>Is your housing subsidized?</p>
//                         <button className={styles.button} onClick={() => handleChoice('yes3day')}>
//                             Yes
//                         </button>
//                         <button className={styles.button} onClick={() => handleChoice('no3day')}>
//                             No
//                         </button>
//                     </>
//                 )}

//                 {step === 'yes30day' && (
//                     <>
//                         <p className={styles.result}>📌 You should contact the Legal Aid Society.</p>
//                         <Link href="/legal-aid-society" onClick={(event) => handleExternalLinkClick(event, '/legal-aid-society') } className={styles.link}>
//                             Get Legal Assistance
//                         </Link>
//                     </>
//                 )}

//                 {step === 'no30day' && (
//                     <>
//                         <p className={styles.result}>⚠️ More information needed. Please check local policies.</p>
//                     </>
//                 )}

//                 {step === 'yes3day' && (
//                     <>
//                         <p className={styles.result}>⚠️ Your notice may contain incorrect statements.</p>
//                         <Link href="/notice-incorrect-statement" onClick={(event) => handleExternalLinkClick(event, '/notice-incorrect-statement') } className={styles.link}>
//                             Learn More
//                         </Link>
//                     </>
//                 )}

//                 {step === 'no3day' && (
//                     <>
//                         <p className={styles.question}>Did you successfully mediate?</p>
//                         <button className={styles.button} onClick={() => handleChoice('yesMediation')}>
//                             Yes
//                         </button>
//                         <button className={styles.button} onClick={() => handleChoice('noMediation')}>
//                             No
//                         </button>
//                     </>
//                 )}

//                 {step === 'yesMediation' && (
//                     <>
//                         <p className={styles.result}>🎉 Congrats, but additional resources may be available.</p>
//                     </>
//                 )}

//                 {step === 'noMediation' && (
//                     <>
//                         <p className={styles.question}>Check court-specific information.</p>
//                         <Link href="/court-specific-info" onClick={(event) => handleExternalLinkClick(event, '/court-specific-info') } className={styles.link}>
//                             Court Information
//                         </Link>
//                         <p className={styles.question}>Need assistance? Try our chatbot.</p>
//                         <Link href="/chat" onClick={(event) => handleExternalLinkClick(event, '/chat') } className={styles.link}>
//                             Open Chatbot
//                         </Link>
//                     </>
//                 )}

//                 {step !== 'start' && (
//                     <>
//                         <button className={styles.backButton} onClick={handleBack}>⬅ Back</button>
//                         <div className={styles.progressBarContainer}>
//                             <div className={styles.progressBar} style={{ width: `${progress}%` }}/>
//                         </div>
//                     </>
//                 )}
//             </div>
//             {<DataCollectionPopup isOpen={isSurveyOpen} onClose={() => setSurveyOpen(false)} />}
//         </div>
//     );
// }
