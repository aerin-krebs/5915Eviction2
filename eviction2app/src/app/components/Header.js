"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@mui/material";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile view if width < 768px
    };

    checkScreenSize(); // Run on mount
    window.addEventListener("resize", checkScreenSize); // Listen for resize

    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image src="/eviction-logo2.png" alt="Eviction Education Logo" width={180} height={80} />
        </Link>

        {/* Google Translate: Only visible in mobile view */}
        {isMobile && <div id="google_translate_element" />}
      </div>

      {/* Mobile menu button */}
      <div className={styles.menuButton}>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop nav links */}
      {!isMobile && (
        <div className={styles.navLinks}>
          <Link href="/" underline="hover" color="#1d3747" className={styles.navLink}>
            Home
          </Link>
          <Link href="/decision-finder" underline="hover" color="#1d3747" className={styles.navLink}>
            Find A Solution
          </Link>
          <Link href="/chat" underline="hover" color="#1d3747" className={styles.navLink}>
            Chat
          </Link>
          <Link href="/faq" underline="hover" color="#1d3747" className={styles.navLink}>
            FAQs
          </Link>
          <Link href="/resource-finder" underline="hover" color="#1d3747" className={styles.navLink}>
            Resources
          </Link>

          {/* Google Translate: Visible in desktop */}
          <div className={styles.googleContainer}><div id="google_translate_element" /></div>
        </div>
      )}

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.mobileMenu}
        >
          <Link href="/" underline="hover" color="#1d3747" className={styles.mobileMenuLink}>
            Home
          </Link>
          <Link
            href="/decision-finder"
            underline="hover"
            color="#1d3747"
            className={styles.mobileMenuLink}
          >
            Find A Solution
          </Link>
          <Link href="/chat" underline="hover" color="#1d3747" className={styles.mobileMenuLink}>
            Chat
          </Link>
          <Link href="/faq" underline="hover" color="#1d3747" className={styles.mobileMenuLink}>
            FAQs
          </Link>
          <Link
            href="/resource-finder"
            underline="hover"
            color="#1d3747"
            className={styles.mobileMenuLink}
          >
            Resources
          </Link>
        </motion.div>
      )}
    </header>
  );
}