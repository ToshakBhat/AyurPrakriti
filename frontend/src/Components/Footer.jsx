import "../Styles/Footer.css";
import Logo from "../Assets/Logo.png";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">

            <p className="ft-description">
              Your holistic journey to Ayurvedic well-being. Harness the wisdom
              of Ayurveda with our chatbot, designed to personalize your path to
              health. Discover your Prakriti, balance your doshas, and embrace a
              harmonious life.
            </p>
          </div>
        </div>

        <div className="ft-copyright">
          <p>© 2023-2024 AyurBot. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
