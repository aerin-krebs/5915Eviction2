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
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logo}>
          <Image src="/eviction-logo2.png" alt="Eviction Education Logo" width={180} height={80} />
        </Link>
      </div>

      <div className={styles.menuButton}>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Nav Links */}
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
        </div>
      )}

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.mobileMenu}
        >
          <Link href="/" underline="hover" color="#1d3747" className={styles.mobileMenuLink}>
            Home
          </Link>
          <Link href="/decision-finder" underline="hover" color="#1d3747" className={styles.mobileMenuLink}>
            Find A Solution
          </Link>
          <Link href="/chat" underline="hover" color="#1d3747" className={styles.mobileMenuLink}>
            Chat
          </Link>
          <Link href="/faq" underline="hover" color="#1d3747" className={styles.mobileMenuLink}>
            FAQs
          </Link>
          <Link href="/resource-finder" underline="hover" color="#1d3747" className={styles.mobileMenuLink}>
            Resources
          </Link>
        </motion.div>
      )}
    </header>
  );
}
