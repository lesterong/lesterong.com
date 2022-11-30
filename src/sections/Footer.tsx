import Bgcolors from '../types/Bgcolors';
import Section from './Section';
import Contact from '../assets/Contact';

const Footer = () => (
  <Section color={Bgcolors.Beige}>
    <hr className="border-gray-200" />
    <h2 className="mt-6">Like what you see?</h2>
    <p className="mt-2">I&apos;d love to work with you! Let&apos;s talk.</p>
    <div className="mb-6 mt-2 flex space-x-4">
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
    <p className="mb-6 text-center text-sm text-[#a9a9a9]">&copy; Lester Ong, 2022.</p>
  </Section>
);

export default Footer;
