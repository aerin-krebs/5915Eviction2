import { useState, useEffect } from "react";
import styles from "./LegalDisclaimer.module.css";

export default function LegalDisclaimer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("legalDisclaimerAccepted")) {
      setIsVisible(true);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem("legalDisclaimerAccepted", "true");
  };

  if (!isVisible) return null; // Don't render the popup if it's not visible

  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <h2>Legal Disclaimer</h2>
        <p><strong>1.1 General Disclaimer</strong><br />
          The content provided on this website, including but not limited to text, graphics, user interfaces, 
          trademarks, and computer code, is for informational purposes only and does not constitute legal advice. 
          Users should seek professional legal counsel before acting on any information.
        </p>

        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
}
