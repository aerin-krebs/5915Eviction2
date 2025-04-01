import { useState, useEffect } from "react";
import styles from "./LegalDisclaimer.module.css";

export default function LegalDisclaimer({ onAccept }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("legalDisclaimerAccepted")) {
      setIsVisible(true);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem("legalDisclaimerAccepted", "true");
    onAccept();
  };

  if (!isVisible) return null; 

  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <h1><strong>Legal Disclaimer</strong></h1>
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

        <p><strong>1.5 Limitation of Liability</strong><br />
          The website operators, contributors, and affiliated organizations shall not be held liable for any errors, omissions, or outcomes resulting from reliance on the information provided. 
          Use of this website is at the user's own risk. 
        </p>

        <p><strong>1.6 Privacy</strong><br />
          The operators of this website are committed to protecting users' privacy in compliance with applicable laws and regulations. 
          Personal information collected through the platform, if any, will be used solely for the purpose of enhancing user experience, providing services, and improving the website. 
          The website does not sell, rent, or share personal information with third parties without user consent, except as required by law. 
          By using this website, users consent to the collection and use of their data as described in the Privacy Policy page. 
          Users should be aware that the website may contain links to third-party sites, and the operators of this website are not responsible for the privacy practices or content of those external sites. 
        </p>

        <p><strong>1.7 Translation</strong><br />
          This website utilizes Google Translate to provide automatic translations of its content. 
          Automated translations may not always be accurate, precise, or reflective of the original legal meaning. 
          Users should verify critical legal information with a qualified professional or refer to official legal resources in their preferred language. 
          The website operators are not responsible for any misinterpretations, errors, or inaccuracies resulting from automated translations. 
        </p>

        <button onClick={closePopup}>I agree</button>
      </div>
    </div>
  );
}
