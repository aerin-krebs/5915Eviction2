import Link from 'next/link';
import { useState } from 'react';

export default function DecisionFinder() {
    const [decision, setDecision] = useState(null);

    const handleDecision = (choice) => {
        setDecision(choice);
    };

    return (
        <div style={styles.container}>
            <h1>Decision Finder</h1>
            {!decision && (
                <>
                    <p>Are you sure you want to proceed?</p>
                    <button style={styles.button} onClick={() => handleDecision('yes')}>
                        Yes
                    </button>
                    <button style={styles.button} onClick={() => handleDecision('no')}>
                        No
                    </button>
                </>
            )}
            {decision === 'yes' && (
                <p style={styles.result}>You chose YES. [Display relevant guidance here.]</p>
            )}
            {decision === 'no' && (
                <p style={styles.result}>You chose NO. [Display relevant guidance here.]</p>
            )}
            <Link href="/">
                <a style={styles.backLink}>Back to Home</a>
            </Link>
        </div>
    );
}

const styles = {
    container: {
        padding: '1rem',
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#0070f3',
        color: '#fff',
        margin: '0.5rem',
        padding: '0.75rem 1rem',
        borderRadius: '4px',
        border: 'none',
    },
    result: {
        margin: '1rem 0',
        fontWeight: 'bold',
    },
    backLink: {
        display: 'block',
        marginTop: '1rem',
        color: '#0070f3',
        textDecoration: 'none',
    },
};
