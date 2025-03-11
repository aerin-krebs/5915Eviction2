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

        <p><strong>1.2 No Attorney-Client Relationship</strong><br />
          Use of this website does not create an attorney-client relationship. Communications through this platform 
          do not constitute legal representation.
        </p>

        <p><strong>1.3 No Legal Services Provided</strong><br />
          This website does not offer legal services or legal advice. The operators of this website are not licensed attorneys and are not authorized to practice law in the state of Ohio or any jurisdiction. 
          Laws vary by jurisdiction, and the information provided may not be applicable in all states or legal situations. 
          Users should consult an attorney licensed in their jurisdiction for specific legal guidance.
          Any actions taken based on the information provided on this website are at the user’s own risk. 
        </p>

        <p><strong>1.4 User Responsibility</strong><br />
          Users of this website are responsible for ensuring that their use of the information provided complies with all applicable laws and regulations. 
          The website operators do not warrant or guarantee that the information provided is accurate, complete, or up-to-date. 
          Users are encouraged to seek professional legal advice to ensure compliance with the most current laws applicable to their circumstances. 
        </p>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
}
