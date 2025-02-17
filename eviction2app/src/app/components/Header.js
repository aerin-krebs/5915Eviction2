'use client';

// import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from '@mui/material';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Eviction Education</h1>
      <div className={styles.menuButton}>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className={styles.navLinks}>
        <Link href="/" underline="hover" className={styles.navLink}>Home</Link>
        <Link href="/resource-finder" underline="hover" className={styles.navLink}>Resources</Link>
        <Link href="/decision-finder" underline="hover" className={styles.navLink}>Find A Solution</Link>
        <Link href="/faq" underline="hover" className={styles.navLink}>FAQs</Link>
      </div>
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.mobileMenu}>
          <Link href="/" className={styles.mobileMenuLink}>Home</Link>
          <Link href="/resource-finder" className={styles.mobileMenuLink}>Resources</Link>
          <Link href="/decision-finder" className={styles.mobileMenuLink}>Find A Solution</Link>
          <Link href="/faq" className={styles.mobileMenuLink}>FAQs</Link>
        </motion.div>
      )}
    </header>
  );
}