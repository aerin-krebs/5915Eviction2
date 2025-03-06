'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from '@mui/material';
import styles from './Header.module.css';
import { useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    // Inject custom CSS for Google Translate
    const style = document.createElement('style');
    style.textContent = `
      .goog-te-gadget {
        font-weight:600;
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
      }
      .VIpgJd-ZVi9od-l4eHX-hSRGPd{
        display: flex;
        flex-direction: row;
        align-items:center;
      }
      .goog-te-gadget img {
        display: flex;
        flex-direction: row;
        align-items: center !important;
        padding-left: 3px;
      }
      .goog-te-gadget span {
        display: flex;
        flex-direction: row;
        font-size: 12px !important; /* Adjust font size */
        // color: #666 !important; /* Adjust text color */
      }
    `;
    document.head.appendChild(style);

    // Cleanup the injected style when the component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    // Define the initialization function globally
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL},
        "google_translate_element"
      );
    };

    // Load the Google Translate script dynamically
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <header className={styles.header}>
      {/* Logo  */}
      <Link href="/" className={styles.logo}>
        <Image src="/eviction-logo2.png" alt="Eviction Education Logo" width={180} height={80} />
      </Link>

      <div className={styles.menuButton}>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className={styles.navLinks}>
        <Link href="/" underline="hover" color=" #1d3747" className={styles.navLink}>Home</Link>
        <Link href="/decision-finder" underline="hover" color=" #1d3747" className={styles.navLink}>Find A Solution</Link>
        <Link href="/chat" underline="hover" color=" #1d3747" className={styles.navLink}>Chat</Link>
        <Link href="/faq" underline="hover" color=" #1d3747" className={styles.navLink}>FAQs</Link>
        <Link href="/resource-finder" underline="hover" color=" #1d3747" className={styles.navLink}>Resources</Link>
        <div id="google_translate_element"></div>
      </div>
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.mobileMenu}>
          <div id="google_translate_element"></div>
          <Link href="/" underline="hover" color="#1d3747" className={styles.mobileMenuLink}>Home</Link>
          <Link href="/decision-finder" underline="hover" color="#1d3747" className={styles.mobileMenuLink}>Find A Solution</Link>
          <Link href="/chat" underline="hover" color="#1d3747" className={styles.mobileMenuLink}>Chat</Link>
          <Link href="/faq" underline="hover" color="#1d3747" className={styles.mobileMenuLink}>FAQs</Link>
          <Link href="/resource-finder" underline="hover" color="#1d3747" className={styles.mobileMenuLink}>Resources</Link>
        </motion.div>
      )}
    </header>
  );
}