import Link from 'next/link';

export default function Chat() {
    // Example of opening an external chat (e.g. Messenger) or simply embedding a chat widget.
    // For demonstration, we’ll just provide a button that links out to Facebook Messenger.
    // Replace with your actual chat integration logic.

    const openMessenger = () => {
        // For example, link to a Messenger page
        window.open('https://m.me/your-page-name', '_blank');
    };

    return (
        <div style={styles.container}>
            <h1>Chat</h1>
            <p>Click the button below to open a Messenger chat.</p>
            <button style={styles.button} onClick={openMessenger}>
                Open Messenger
            </button>
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
        padding: '0.75rem 1rem',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
    },
    backLink: {
        display: 'block',
        marginTop: '1rem',
        color: '#0070f3',
        textDecoration: 'none',
    },
};
