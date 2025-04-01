"use client";

import { useEffect } from "react";
import styles from "./DataCollection.module.css";

export default function DataCollectionPopup({ isOpen, onClose }) {
  // Close when clicking outside the form
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && event.target.classList.contains(styles.overlay)) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <button className={styles.closeButton} onClick={onClose}>✖</button>  
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdzaPMaE_4reH9L8elz2lBy3amB1kQ1dCGmEXkVuAaZsKkuqw/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Google Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}
    </>
  );
}
