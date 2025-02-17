"use client";

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
                    <p>Legal notice:</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend libero sed mauris mattis, eget placerat justo gravida. Cras id augue nec nisl posuere porta. Duis interdum ac tellus at tristique. Donec ultricies, nunc sit amet pharetra convallis, ex quam condimentum turpis, ac fringilla neque lectus ac libero. Maecenas vestibulum eros massa, sagittis vestibulum nibh dapibus quis. Vestibulum ut volutpat nisl. Maecenas semper sed augue eget imperdiet.

                        Proin sodales mollis justo cursus pulvinar. Integer eu lobortis ligula. Proin odio orci, consequat eget feugiat in, porttitor ut nunc. Vivamus varius sit amet neque ut sagittis. Donec purus purus, finibus ac mattis id, sagittis quis ante. Vivamus sed arcu et dui tempus vestibulum. Nam quis sapien quis arcu congue aliquet. Vivamus at sapien augue. Sed lacinia maximus velit. Vestibulum ac accumsan felis.

                        Curabitur placerat libero erat, vitae fringilla mi malesuada ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec rhoncus elit arcu, eget eleifend urna volutpat at. Nam eget tellus vitae augue consectetur faucibus ut vitae mi. Donec erat lorem, auctor sed urna eu, suscipit auctor eros. Suspendisse mollis id mi a aliquam. Etiam sed luctus arcu, non luctus dui. Curabitur dictum maximus nunc eu fringilla. Donec at nisl sed nulla sagittis volutpat. Fusce neque enim, tempus vitae dignissim nec, faucibus ac ex. Morbi interdum metus a pulvinar pharetra.

                    </p>
                    <p>By clicking &quot;Yes,&quot; you agree to the terms and conditions.</p>
                    <p>By clicking &quot;No,&quot; you will be redirected to the home page.</p>
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
