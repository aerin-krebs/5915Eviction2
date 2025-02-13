"use client";

import Link from 'next/link';

export default function FAQ() {
    const faqs = [
        {
            question: 'What is eviction?',
            answer: 'Eviction is the process of legally removing a tenant from a property.',
        },
        {
            question: 'Where can I find legal help?',
            answer: 'Local legal aid organizations often provide free or low-cost assistance.',
        },
        // Add more FAQs as needed
    ];

    return (
        <div style={styles.container}>
            <h1>FAQs</h1>
            <ul style={styles.list}>
                {faqs.map((faq, index) => (
                    <li key={index} style={styles.listItem}>
                        <strong>{faq.question}</strong>
                        <p>{faq.answer}</p>
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
    list: {
        listStyle: 'none',
        paddingLeft: 0,
    },
    listItem: {
        marginBottom: '1rem',
    },
    backLink: {
        color: '#0070f3',
        textDecoration: 'none',
    },
};


