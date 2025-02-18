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
        <p className={styles.title}>Are You Facing Eviction?</p>
        <p className={styles.text}>No one should lose their home. Find the help you need today.</p>
        <Button
          component={Link} 
          href="/decision-finder"
          variant="contained"
          sx={{ backgroundColor: '#ffc844', color: '#1d3747', borderRadius: '50px', padding: '12px 24px', fontWeight: 'bold', margin: '1rem'}}
        >
          Find A Solution
        </Button>

        <p className={styles.title}>Have legal questions?</p>
        <p className={styles.text}>Chat with Franklin County Self Help Center. Staff cannot offer legal advice but can assist in finding helpful resources and provide legal information.</p>
        <Button 
          component={Link} 
          href="/chat"
          variant="contained"
          sx={{ backgroundColor: '#ffc844', color: '#1d3747', borderRadius: '50px', padding: '12px 24px', fontWeight: 'bold', margin: '1rem' }}
        >
          Chat Now
        </Button>

        <p className={styles.title}>View frequently asked questions</p>
        <p className={styles.text}>Click below to see frequently asked questions by people experiencing eviction.</p>
        <Button 
          component={Link} 
          href="/faq"
          variant="contained"
          sx={{ backgroundColor: '#ffc844', color: '#1d3747', borderRadius: '50px', padding: '12px 24px', fontWeight: 'bold', margin: '1rem' }}
        >
          FAQs
        </Button>

        <p className={styles.title}>Looking for resources?</p>
        <p className={styles.text}>Click below to see our list of resources to help you avoid eviction.</p>
        <Button 
          component={Link} 
          href="/resource-finder"
          variant="contained"
          sx={{ backgroundColor: '#ffc844', color: '#1d3747', borderRadius: '50px', padding: '12px 24px', fontWeight: 'bold', margin: '1rem' }}
        >
          Resources
        </Button>
      </div>
    </div>
  );
}
