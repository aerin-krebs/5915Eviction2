'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Facing Eviction?</h1>
      <p style={styles.paragraph}>[Insert inspiring call to action here]</p>

      {/* Example drop-down (if needed) */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="dropdown">Select an Option: </label>
        <select
          id="dropdown"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="">--Select--</option>
          <option value="option1">Help Option 1</option>
          <option value="option2">Help Option 2</option>
        </select>
      </div>

      {/* Buttons / Navigation */}
      <div style={styles.buttonContainer}>
        <Link href="/resource-finder" style={styles.button}>
          Find a Solution
        </Link>
        <Link href="/faq" style={styles.button}>
          FAQs
        </Link>
        <Link href="/chat" style={styles.button}>
          Chat Now
        </Link>

      </div>
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
  heading: {
    marginBottom: '1rem',
  },
  paragraph: {
    marginBottom: '1rem',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '1rem',
  },
  button: {
    backgroundColor: '#0070f3',
    color: '#fff',
    padding: '0.75rem 1rem',
    textDecoration: 'none',
    borderRadius: '4px',
  },
};
