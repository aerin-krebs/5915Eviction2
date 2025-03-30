"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from "axios"; // Import axios
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

    // Filtered resources based on search term and category filter
    const filteredResources = resources.filter((resource) => {
        return (
            resource.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filter === 'All' || resource.resourceCategory === filter)
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
                    <option value="Chat">Chat</option>
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

// "use client";

// import Link from 'next/link';
// import { useState } from 'react';
// import Header from '../components/Header';
// import styles from './ResourceFinder.module.css';
// import DataCollectionPopup from "../components/DataCollectionPopup";

// export default function ResourceFinder() {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filter, setFilter] = useState('All'); // Filter state
//     const [isSurveyOpen, setSurveyOpen] = useState(false);

//     const handleExternalLinkClick = (event, link) => {
//         event.preventDefault(); // Prevent default navigation
//         setSurveyOpen(true); // Open survey popup

//         // Open the link in a new tab after a short delay
//         setTimeout(() => {
//             window.open(link, "_blank", "noopener,noreferrer");
//         }, 300);
//     };

//     // Example resources
//     const resources = [
//         {
//             name: 'Housing Assistance',
//             category: 'Housing',
//             description: 'Help with rent, eviction prevention, etc.',
//             prerequisites: 'Proof of income, residency',
//             link: '/housing-assistance',
//         },
//         {
//             name: 'Legal Aid',
//             category: 'Legal',
//             description: 'Free or low-cost legal support',
//             prerequisites: 'Income eligibility, legal need',
//             link: '/legal-aid',
//         },
//         {
//             name: 'Food Support',
//             category: 'Food',
//             description: 'Food banks, SNAP, local assistance',
//             prerequisites: 'Varies by program',
//             link: '/food-support',
//         },
//     ];

//     // Filtered resources based on search term and category filter
//     const filteredResources = resources.filter((resource) => {
//         return (
//             resource.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//             (filter === 'All' || resource.category === filter)
//         );
//     });

//     return (
//         <div className={styles.container}>
//             <Header/>
//             <div className={styles.contentBox}>
//             <h1 className={styles.title}>Need Help Finding Resources?</h1>
//             <p className={styles.subtitle}>
//                 No one should struggle alone. Find assistance for housing, food, and legal aid.
//             </p>

//             {/* Search Input */}
//             <input
//                 type="text"
//                 placeholder="Search resources..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className={styles.searchInput}
//             />

//             {/* Filter Dropdown */}
//             <select
//                 value={filter}
//                 onChange={(e) => setFilter(e.target.value)}
//                 className={styles.filterDropdown}
//             >
//                 <option value="All">All Categories</option>
//                 <option value="Housing">Housing</option>
//                 <option value="Legal">Legal Aid</option>
//                 <option value="Food">Food Support</option>
//             </select>

//             {/* Responsive Table */}
//             <div className={styles.tableWrapper}>
//                 <table className={styles.table}>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Description</th>
//                             <th>Prerequisites</th>
//                             <th>Link</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredResources.map((resource, index) => (
//                             <tr key={index}>
//                                 <td>{resource.name}</td>
//                                 <td>{resource.description}</td>
//                                 <td>{resource.prerequisites}</td>
//                                 <td>
//                                     <Link href={resource.link} onClick={(event) => handleExternalLinkClick(event, resource.link) } className={styles.link}>
//                                         Learn More
//                                     </Link>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//         {<DataCollectionPopup isOpen={isSurveyOpen} onClose={() => setSurveyOpen(false)} />}
//         </div>
//     );
// }