'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@mui/material';
import Header from '../components/Header';
import styles from '../home/Home.module.css';
import DataCollectionPopup from "../components/DataCollectionPopup";

export default function Chat() {
    const openMessenger = () => {
        window.open('https://www.messenger.com/t/1867045913328638/', '_blank');
    };
    const [isSurveyOpen, setSurveyOpen] = useState(false);
    const handleExternalLinkClick = (event, link) => {
        event.preventDefault(); // Prevent default navigation
        setSurveyOpen(true); // Open survey popup

        // Open the link in a new tab after a short delay
        setTimeout(() => {
            window.open(link, "_blank", "noopener,noreferrer");
        }, 300);
    };
    
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.contentBox}>
                <p className={styles.title}>Need legal help?</p>
                <p className={styles.text}>
                    The Franklin County Municipal Court Self Help Resource Center gives free legal information.
                    They can’t give legal advice, but they can help you understand your options.
                </p>

                <Button
                    onClick={(event) => handleExternalLinkClick(event, openMessenger()) }
                    variant="contained"
                    sx={{ backgroundColor: '#fca311', color: '#1d3747', borderRadius: '50px', padding: '12px 24px', fontWeight: 'bold', margin: '1rem' }}
                >
                    Open Facebook Messenger Chat
                </Button>

                <p className={styles.title}>More ways to get help.</p>
                <p className={styles.text}>
                    If you need more information, you can visit the Self Help Center in person at the Franklin County Municipal Court.
                    You may also find useful resources online.
                </p>

                <Button
                    component={Link}
                    href="/resource-finder"
                    variant="contained"
                    sx={{ backgroundColor: '#fca311', color: '#1d3747', borderRadius: '50px', padding: '12px 24px', fontWeight: 'bold', margin: '1rem' }}
                >
                    View Resources
                </Button>

                <Button
                    component={Link}
                    href="/faq"
                    variant="contained"
                    sx={{ backgroundColor: '#fca311', color: '#1d3747', borderRadius: '50px', padding: '12px 24px', fontWeight: 'bold', margin: '1rem' }}
                >
                    Frequently Asked Questions
                </Button>

                <Button
                    component={Link}
                    href="/"
                    variant="contained"
                    sx={{ backgroundColor: '#fca311', color: '#1d3747', borderRadius: '50px', padding: '12px 24px', fontWeight: 'bold', margin: '1rem' }}
                >
                    Back to Home
                </Button>
            </div>
            {<DataCollectionPopup isOpen={isSurveyOpen} onClose={() => setSurveyOpen(false)} />}
        </div>
    );
}
