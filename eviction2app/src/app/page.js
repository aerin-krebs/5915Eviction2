'use client';

import Link from 'next/link';
import { Button } from '@mui/material';
import Header from './components/Header';
import styles from './home/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contentBox}>
        <h1 className={styles.title}>Facing Eviction?</h1>
        <p className={styles.text}>No one should lose their home. Find the help you need today.</p>
        
        <p className={styles.text}>Need help finding a solution?</p>
        <Button color="primary" component={Link} href="/decision-finder">
          Find A Solution
        </Button>

        <p className={styles.text}>Have legal questions?</p>
        <p className={styles.text}>Chat with Franklin County Self Help Center. Staff cannot offer legal advice but can assist in finding helpful resources and provide legal information.</p>
        <Button color="primary" component={Link} href="/chat">
          Chat Now
        </Button>

        <p className={styles.text}>View frequently asked questions</p>
        <Button color="primary" component={Link} href="/faq">
          FAQs
        </Button>

        <p className={styles.text}>Looking for resources?</p>
        <Button color="primary" component={Link} href="/resource-finder">
          Resources
        </Button>
      </div>
    </div>
  );
}
