import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__social">
          <a 
            href="https://github.com/Yboneks" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="GitHub"
            title="Voir mon GitHub"
          >
            <FaGithub className="footer__social-icon" aria-hidden="true" />
          </a>
          <a 
            href="https://linkedin.com/in/joshua-ormeray-696799180/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="LinkedIn"
            title="Voir mon LinkedIn"
          >
            <FaLinkedin className="footer__social-icon" aria-hidden="true" />
          </a>
        </div>

        <p className="footer__copyright">
          © {new Date().getFullYear()} Joshua Ormeray - Tous droits réservés
        </p>
      </div>
    </footer>
  );
}