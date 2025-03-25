"use client";

import { useState, useEffect } from "react";
import styles from "./DataCollection.module.css";

export default function DataCollectionPopup() {
  const [isOpen, setIsOpen] = useState(false);

  // Open the modal
  const openPopup = () => setIsOpen(true);

  // Close the modal
  const closePopup = () => setIsOpen(false);

  // Close when clicking outside the form
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && event.target.classList.contains(styles.overlay)) {
        closePopup();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Floating Button */}
      <button className={styles.floatingButton} onClick={openPopup}>
        📋 Demographic Survey
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <button className={styles.closeButton} onClick={closePopup}>✖</button>  
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

