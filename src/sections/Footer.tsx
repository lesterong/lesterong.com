import { Link } from 'react-router-dom';
import Bgcolors from '../types/Bgcolors';
import Section from './Section';
import Contact from '../assets/Contact';

const Footer = () => (
  <Section color={Bgcolors.Beige}>
    <hr className="border-gray-200" />
    <h2 className="mt-6">Like what you see?</h2>
    <div className="mt-2 flex flex-col justify-between sm:flex-row">
      <div>
        <p>I&apos;d love to work with you.</p>
        <Link to="contact" className="nav-link w-fit">
          <p className="mb-6 inline-block">
            Come say hello! <span className="right-arrow inline-block">&#x2192;</span>
          </p>
        </Link>
      </div>
      <div className="text-left sm:text-right">
        <p>Let&apos;s connect!</p>
        <div className="mb-6 mt-2 flex justify-start space-x-4 sm:justify-end">
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
    <p className="mb-6 text-center text-sm text-[#a9a9a9]">&copy; Lester Ong, 2022.</p>
  </Section>
);

export default Footer;
