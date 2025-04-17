"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import styles from './ResourceFinder.module.css';
import DataCollectionPopup from "../components/DataCollectionPopup";
import { getResources } from '../api';

export default function ResourceFinder() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All'); // Filter state
    const [resources, setResources] = useState([]); // State to hold fetched resources
    const [isSurveyOpen, setSurveyOpen] = useState(false);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    // Function to detect if a URL is a phone number
    const isPhoneNumber = (text) => {
        // Matches phone numbers like (614) 294-6347 or 614-294-6347 or 6142946347
        const phoneRegex = /^(\(\d{3}\)\s?|\d{3}[-.\s]?)\d{3}[-.\s]?\d{4}$/;
        return phoneRegex.test(text);
    };

    /** Helper function to detect internal pages */
    const isInternalPage = (text) => {
        // Matches resources with values likle "/chat" or "/resource-finder"
        const pageRegex = /^\/[a-zA-Z0-9-]+$/;
        return pageRegex.test(text);
    };

    useEffect(() => {
        const fetchResources = async () => {
            try {
                const response = await getResources();
                setResources(response); // Set the fetched resources to state
            } catch (err) {
                setError("Failed to load resources.");
                console.error("Error fetching resources:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchResources();
    }, []);

    const handleExternalLinkClick = (event, link) => {
        event.preventDefault(); // Prevent default navigation
        setSurveyOpen(true); // Open survey popup

        // Open the link in a new tab after a short delay
        setTimeout(() => {
            window.open(link, "_blank", "noopener,noreferrer");
        }, 300);
    };

    const filteredResources = resources.filter((resource) => {
        return (
            resource.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filter === 'All' || resource.resourceCategory === filter) &&
            !isInternalPage(resource.url) // Exclude internal pages
        );
    });

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.contentBox}>
                <h1 className={styles.title}>Need Help Finding Resources?</h1>
                <p className={styles.subtitle}>
                    No one should struggle alone. Find assistance for housing, food, and legal aid.
                </p>

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchInput}
                />

                {/* Filter Dropdown */}
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className={styles.filterDropdown}
                >
                    <option value="All">All Categories</option>
                    <option value="Youth Crisis Support">Youth Crisis Support</option>
                    <option value="Adult & Family Crisis Support">Adult & Family Crisis Support</option>
                    <option value="Legal Counsel">Legal Counsel</option>
                    <option value="Rental Assistance">Rental Assistance</option>
                    <option value="Fillable Form">Fillable Form</option>
                </select>

                {/* Show loading or error messages */}
                {loading && <p>Loading resources...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}

                {/* Responsive Table */}
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredResources.map((resource, index) => (
                                <tr key={index}>
                                    <td>{resource.title}</td>
                                    <td>{resource.summary}</td>
                                    <td>
                                        {isPhoneNumber(resource.url) ? (
                                            <a href={`tel:${resource.url}`} className={styles.link}>
                                                📞 Call Now {resource.url}
                                            </a>
                                        ) : (
                                            <Link href={resource.url} onClick={(event) => handleExternalLinkClick(event, resource.url)} className={styles.link}>
                                                Learn More
                                            </Link>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <DataCollectionPopup isOpen={isSurveyOpen} onClose={() => setSurveyOpen(false)} />
        </div>
    );
}