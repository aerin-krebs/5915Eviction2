'use client';

import Link from 'next/link';
import { Button } from '@mui/material';
import Header from '../components/Header';
import styles from '../home/Home.module.css';

export default function Chat() {
    const openMessenger = () => {
        window.open('https://www.messenger.com/t/1867045913328638/', '_blank');
    };

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.contentBox}>
                <p className={styles.title}>Need Legal Assistance?</p>
                <p className={styles.text}>
                    The Franklin County Municipal Court Self Help Resource Center provides free legal information.
                    While staff cannot offer legal advice, they can assist you in understanding your options.
                </p>

                <Button
                    onClick={openMessenger}
                    variant="contained"
                    sx={{ backgroundColor: '#fca311', color: '#1d3747', borderRadius: '50px', padding: '12px 24px', fontWeight: 'bold', margin: '1rem' }}
                >
                    Open Messenger Chat
                </Button>

                <p className={styles.title}>Other Ways to Get Help</p>
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
        </div>
    );
}
