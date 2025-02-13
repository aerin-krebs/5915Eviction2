import Link from 'next/link';
import { useState } from 'react';

export default function ResourceFinder() {
    const [searchTerm, setSearchTerm] = useState('');
    // Example resources
    const resources = [
        { name: 'Housing Assistance', description: 'Help with rent, eviction prevention, etc.' },
        { name: 'Legal Aid', description: 'Free or low-cost legal support' },
        { name: 'Food Support', description: 'Food banks, SNAP, local assistance' },
    ];

    const filteredResources = resources.filter((resource) =>
        resource.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={styles.container}>
            <h1>Resource Finder</h1>
            <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={styles.searchInput}
            />
            <ul style={styles.list}>
                {filteredResources.map((resource, index) => (
                    <li key={index} style={styles.listItem}>
                        <strong>{resource.name}</strong>: {resource.description}
                    </li>
                ))}
            </ul>
            <Link href="/" style={styles.backLink}>
                Back to Home
            </Link>
        </div>
    );
}

const styles = {
    container: {
        padding: '1rem',
        maxWidth: '600px',
        margin: '0 auto',
    },
    searchInput: {
        width: '100%',
        padding: '0.5rem',
        marginBottom: '1rem',
    },
    list: {
        listStyleType: 'none',
        paddingLeft: 0,
        marginBottom: '1rem',
    },
    listItem: {
        marginBottom: '0.5rem',
    },
    backLink: {
        color: '#0070f3',
        textDecoration: 'none',
    },
};
