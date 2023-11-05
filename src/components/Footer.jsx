import "./FooterStyles.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const iconStyles = {
    github: {
      color: "white",
    },
    linkedin: {
      color: "white",
    },
    instagram: {
      color: "white",
    },
  };
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-help-others">
          <div className="footer-help">
            <p>Help</p>
            <ul>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Troubleshooting</a>
              </li>
            </ul>
          </div>
          <div className="footer-others">
            <p>Others</p>
            <ul>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">License</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-icons">
          <a
            href="https://github.com/SabriMnaouer"
            className="footer-icon"
            style={{
              color: iconStyles.github.color,
              text: iconStyles.github.text,
            }}>
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sabri-mnaouer/"
            className="footer-icon"
            style={{
              color: iconStyles.linkedin.color,
              text: iconStyles.linkedin.text,
            }}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/sabri_mnaouar"
            className="footer-icon"
            style={{ color: iconStyles.instagram.color }}>
            <i className="fab fa-instagram"></i>
          </a>
          <p className="footer-text">©{currentYear} Sabri MNAOUER </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
