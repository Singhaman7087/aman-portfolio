import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-about">
          <h2>Aman.</h2>

          <p>
            Frontend Developer passionate about creating
            modern, responsive and user-friendly web
            experiences.
          </p>
        </div>

        <div className="footer-social">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Aman Singh. All Rights Reserved.</p>

        <a href="#home">Back to Top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;