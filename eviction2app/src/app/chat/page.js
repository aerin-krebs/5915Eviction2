"use client";

import Link from 'next/link';
import styles from './Chat.module.css';

export default function Chat() {
    const openMessenger = () => {
        window.open('https://m.me/your-page-name', '_blank');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Chat Assistance</h1>
            <p className={styles.text}>Click the button below to open a chat for support.</p>
            <button className={styles.button} onClick={openMessenger}>
                Open Messenger
            </button>
            <Link href="/" className={styles.backLink}>
                Back to Home
            </Link>
        </div>
    );
}
