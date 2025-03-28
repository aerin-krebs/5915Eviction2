"use client";

import Link from 'next/link';
import { useState } from 'react';
import Header from '../components/Header';
import styles from './ResourceFinder.module.css';
import DataCollectionPopup from "../components/DataCollectionPopup";

export default function ResourceFinder() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All'); // Filter state
    const [isSurveyOpen, setSurveyOpen] = useState(false);

    const handleExternalLinkClick = (event, link) => {
        event.preventDefault(); // Prevent default navigation
        setSurveyOpen(true); // Open survey popup

        // Open the link in a new tab after a short delay
        setTimeout(() => {
            window.open(link, "_blank", "noopener,noreferrer");
        }, 300);
    };

    // Example resources
    const resources = [
        {
            name: 'Housing Assistance',
            category: 'Housing',
            description: 'Help with rent, eviction prevention, etc.',
            prerequisites: 'Proof of income, residency',
            link: '/housing-assistance',
        },
        {
            name: 'Legal Aid',
            category: 'Legal',
            description: 'Free or low-cost legal support',
            prerequisites: 'Income eligibility, legal need',
            link: '/legal-aid',
        },
        {
            name: 'Food Support',
            category: 'Food',
            description: 'Food banks, SNAP, local assistance',
            prerequisites: 'Varies by program',
            link: '/food-support',
        },
    ];

    // Filtered resources based on search term and category filter
    const filteredResources = resources.filter((resource) => {
        return (
            resource.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filter === 'All' || resource.category === filter)
        );
    });

    return (
        <div className={styles.container}>
            <Header/>
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
                <option value="Housing">Housing</option>
                <option value="Legal">Legal Aid</option>
                <option value="Food">Food Support</option>
            </select>

            {/* Responsive Table */}
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Prerequisites</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredResources.map((resource, index) => (
                            <tr key={index}>
                                <td>{resource.name}</td>
                                <td>{resource.description}</td>
                                <td>{resource.prerequisites}</td>
                                <td>
                                    <Link href={resource.link} onClick={(event) => handleExternalLinkClick(event, resource.link) } className={styles.link}>
                                        Learn More
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        {<DataCollectionPopup isOpen={isSurveyOpen} onClose={() => setSurveyOpen(false)} />}
        </div>
    );
}