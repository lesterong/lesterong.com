import Logo from '../assets/Logo';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <Logo />
    <div className="nav-links">
      <span> Work </span>
      <span> Resume </span>
      <span> Contact </span>
    </div>
  </nav>
);

export default Navbar;
