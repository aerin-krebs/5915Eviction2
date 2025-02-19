"use client";

import Link from 'next/link';
import Header from '../components/Header.js';
import { useState } from 'react';
import styles from './DecisionFinder.module.css'; // Import CSS file

export default function DecisionFinder() {
    const [step, setStep] = useState('start');

    const handleChoice = (nextStep) => {
        setStep(nextStep);
    };

    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.contentBox}>
                <h1 className={styles.title}>Decision Finder</h1>

                {step === 'start' && (
                    <>
                        <p className={styles.question}>Do you have a 3 or 30 day notice?</p>
                        <button className={styles.button} onClick={() => handleChoice('30day')}>
                            30 Day Notice
                        </button>
                        <button className={styles.button} onClick={() => handleChoice('3day')}>
                            3 Day Notice
                        </button>
                    </>
                )}

                {step === '30day' && (
                    <>
                        <p className={styles.question}>Is your housing subsidized?</p>
                        <button className={styles.button} onClick={() => handleChoice('yes30day')}>
                            Yes
                        </button>
                        <button className={styles.button} onClick={() => handleChoice('no30day')}>
                            No
                        </button>
                    </>
                )}

                {step === '3day' && (
                    <>
                        <p className={styles.question}>Is your housing subsidized?</p>
                        <button className={styles.button} onClick={() => handleChoice('yes3day')}>
                            Yes
                        </button>
                        <button className={styles.button} onClick={() => handleChoice('no3day')}>
                            No
                        </button>
                    </>
                )}

                {step === 'yes30day' && (
                    <>
                        <p className={styles.result}>📌 You should contact the Legal Aid Society.</p>
                        <Link href="/legal-aid-society" className={styles.link}>
                            Get Legal Assistance
                        </Link>
                    </>
                )}

                {step === 'no30day' && (
                    <>
                        <p className={styles.result}>⚠️ More information needed. Please check local policies.</p>
                    </>
                )}

                {step === 'yes3day' && (
                    <>
                        <p className={styles.result}>⚠️ Your notice may contain incorrect statements.</p>
                        <Link href="/notice-incorrect-statement" className={styles.link}>
                            Learn More
                        </Link>
                    </>
                )}

                {step === 'no3day' && (
                    <>
                        <p className={styles.question}>Did you successfully mediate?</p>
                        <button className={styles.button} onClick={() => handleChoice('yesMediation')}>
                            Yes
                        </button>
                        <button className={styles.button} onClick={() => handleChoice('noMediation')}>
                            No
                        </button>
                    </>
                )}

                {step === 'yesMediation' && (
                    <>
                        <p className={styles.result}>🎉 Congrats, but additional resources may be available.</p>
                    </>
                )}

                {step === 'noMediation' && (
                    <>
                        <p className={styles.question}>Check court-specific information.</p>
                        <Link href="/court-specific-info" className={styles.link}>
                            Court Information
                        </Link>
                        <p className={styles.question}>Need assistance? Try our chatbot.</p>
                        <Link href="/chat" className={styles.link}>
                            Open Chatbot
                        </Link>
                    </>
                )}

                <Link href="/" className={styles.backLink}>
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
