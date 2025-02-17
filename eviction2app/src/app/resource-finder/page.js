"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from './ResourceFinder.module.css'; // Import CSS file

export default function ResourceFinder() {
    const [searchTerm, setSearchTerm] = useState('');

    // Example resources
    const resources = [
        {
            name: 'Housing Assistance',
            description: 'Help with rent, eviction prevention, etc.',
            prerequisites: 'Proof of income, residency',
            link: '/housing-assistance',
        },
        {
            name: 'Legal Aid',
            description: 'Free or low-cost legal support',
            prerequisites: 'Income eligibility, legal need',
            link: '/legal-aid',
        },
        {
            name: 'Food Support',
            description: 'Food banks, SNAP, local assistance',
            prerequisites: 'Varies by program',
            link: '/food-support',
        },
    ];

    const filteredResources = resources.filter((resource) =>
        resource.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Need Help Finding Resources?</h1>
            <p className={styles.subtitle}>
                No one should struggle alone. Find assistance for housing, food, and legal aid.
            </p>

            <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
            />

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
                                <Link href={resource.link} className={styles.link}>
                                    Learn More
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Link href="/" className={styles.backLink}>
                Back to Home
            </Link>
        </div>
    );
}
