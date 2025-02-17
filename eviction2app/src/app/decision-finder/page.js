"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from './DecisionFinder.module.css'; // Import CSS file

export default function DecisionFinder() {
    const [decision, setDecision] = useState(null);

    const handleDecision = (choice) => {
        setDecision(choice);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Decision Finder</h1>

            {!decision && (
                <>
                    <p className={styles.legalNotice}>Legal Notice:</p>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend libero sed
                        mauris mattis, eget placerat justo gravida. Cras id augue nec nisl posuere porta.
                        Duis interdum ac tellus at tristique.
                    </p>
                    <p className={styles.text}>
                        By clicking <strong>&quot;Yes&quot;</strong>, you agree to the terms and conditions.
                    </p>
                    <p className={styles.text}>
                        By clicking <strong>&quot;No&quot;</strong>, you will be redirected to the home page.
                    </p>
                    <p className={styles.confirmText}>Are you sure you want to proceed?</p>

                    <button className={styles.button} onClick={() => handleDecision('yes')}>
                        Yes
                    </button>
                    <button className={styles.button} onClick={() => handleDecision('no')}>
                        No
                    </button>
                </>
            )}

            {decision === 'yes' && (
                <p className={styles.result}>✅ You chose <strong>YES</strong>. [Display relevant guidance here.]</p>
            )}
            {decision === 'no' && (
                <p className={styles.result}>❌ You chose <strong>NO</strong>. [Display relevant guidance here.]</p>
            )}

            <Link href="/" className={styles.backLink}>
                Back to Home
            </Link>
        </div>
    );
}
