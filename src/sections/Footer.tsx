import { Link, useLocation } from 'react-router';
import Section from './Section';
import Contact from '../assets/Contact';

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <Section>
      <hr className="border-color--primary" />
      <h2 className="mt-6">Like what you see?</h2>
      <div className="footer">
        {pathname !== '/contact' && (
          <div>
            <p>I&apos;d love to work with you!</p>
            <p className="mb-6">
              <Link to="contact" className="nav-link">
                Come say hello! <span className="right-arrow">&#x2192;</span>
              </Link>
            </p>
          </div>
        )}
        {pathname !== '/resume' && (
          <div>
            <p>Need more details?</p>
            <p className="mb-6">
              <Link to="resume" className="nav-link">
                View my resume <span className="right-arrow">&#x2192;</span>
              </Link>
            </p>
          </div>
        )}
        <div className="footer__connect">
          <p>Let&apos;s connect!</p>
          <div>
            <a href="https://www.github.com/lesterong/" target="_blank" rel="noopener noreferrer">
              <Contact.Github />
            </a>
            <a href="https://www.linkedin.com/in/lesterongpc/" target="_blank" rel="noopener noreferrer">
              <Contact.Linkedin />
            </a>
            <a href="mailto:lesterong776@gmail.com" target="_blank" rel="noopener noreferrer">
              <Contact.Email />
            </a>
          </div>
        </div>
      </div>
      <p className="text-color--footer mb-6 text-center text-sm">&copy; Lester Ong, 2022 - 2025.</p>
    </Section>
  );
};

export default Footer;
