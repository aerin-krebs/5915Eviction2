"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import Header from "./components/Header";
import styles from "./home/Home.module.css";
import "./globals.css";
import LegalDisclaimer from "./components/LegalDisclaimer";
import EvictionPopup from "./components/EvictionPopup";

import DataCollection from "./components/DataCollectionButton";

export default function Home() {
  const [legalAccepted, setLegalAccepted] = useState(false);
  const [evictionPopupSeen, setEvictionPopupSeen] = useState(false);

  useEffect(() => {
    const accepted = sessionStorage.getItem("legalDisclaimerAccepted") === "true";
    setLegalAccepted(accepted);

    if (accepted && !sessionStorage.getItem("evictionPopupSeen")) {
      setEvictionPopupSeen(true);
      sessionStorage.setItem("evictionPopupSeen", "true");
    }
  }, []);

  // Function to call when Legal Disclaimer is accepted
  const handleLegalAccept = () => {
    setLegalAccepted(true);
    if (!sessionStorage.getItem("evictionPopupSeen")) {
      setEvictionPopupSeen(true);
      sessionStorage.setItem("evictionPopupSeen", "true");
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <LegalDisclaimer onAccept={handleLegalAccept} />
      {legalAccepted && evictionPopupSeen && <EvictionPopup setEvictionPopupSeen={setEvictionPopupSeen} />}

      <div className={styles.contentBox}>
        <p className={styles.title}>Are you being evicted?</p>
        <p className={styles.text}>We're here to help.</p>
        <Button
          component={Link}
          href="/decision-finder"
          variant="contained"
          sx={{ backgroundColor: '#fca311', color: '#1d3747', borderRadius: '50px', padding: '12px 24px', fontWeight: 'bold', margin: '1rem' }}
        >
          Find A Solution
        </Button>

        <p className={styles.title}>Have legal questions?</p>
        <p className={styles.text}>You can chat with the Franklin County Self Help Center.
        They can’t give legal advice, but they can share helpful legal information.</p>
        <Button
          component={Link}
          href="/chat"
          variant="contained"
          sx={{ backgroundColor: '#fca311', color: '#1d3747', borderRadius: '50px', padding: '12px 24px', fontWeight: 'bold', margin: '1rem' }}
        >
          Chat Now
        </Button>

        <p className={styles.title}>View frequently asked questions.</p>
        <p className={styles.text}>Click below to see common questions from people going through eviction.</p>
        <Button
          component={Link}
          href="/faq"
          variant="contained"
          sx={{ backgroundColor: '#fca311', color: '#1d3747', borderRadius: '50px', padding: '12px 24px', fontWeight: 'bold', margin: '1rem' }}
        >
          FAQs
        </Button>

        <p className={styles.title}>Looking for resources?</p>
        <p className={styles.text}>Click below to find free services and local resources.</p>
        <Button
          component={Link}
          href="/resource-finder"
          variant="contained"
          sx={{ backgroundColor: '#fca311', color: '#1d3747', borderRadius: '50px', padding: '12px 24px', fontWeight: 'bold', margin: '1rem' }}
        >
          Resources
        </Button>

        <DataCollection />
      </div>
    </div>
  );
}
