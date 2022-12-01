import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo';

const Navbar = () => {
  const navLink = 'font-display font-semibold transition duration-300 ease-in-out hover:text-indigo-200';
  const { pathname } = useLocation();
  return (
    <nav className="absolute top-0 left-0 right-0 mx-auto flex w-screen max-w-6xl items-center justify-between py-4 px-6">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex space-x-4">
        <Link to="projects" className={`${navLink} ${pathname === '/projects' ? 'text-indigo-200' : ''}`}>
          Projects
        </Link>
        <Link to="resume" className={`${navLink} ${pathname === '/resume' ? 'text-indigo-200' : ''}`}>
          Resume
        </Link>
        <Link to="contact" className={`${navLink} ${pathname === '/contact' ? 'text-indigo-200' : ''}`}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
