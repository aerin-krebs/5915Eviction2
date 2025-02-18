"use client";

import Link from 'next/link';
import styles from './Chat.module.css';

export default function Chat() {
    const openMessenger = () => {
        window.open('https://www.messenger.com/t/1867045913328638/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0', '_blank');
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
