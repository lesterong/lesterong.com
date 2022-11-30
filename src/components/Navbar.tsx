import Logo from '../assets/Logo';

const Navbar = () => {
  const navLink = 'font-display font-semibold transition-colors duration-300 ease-in-out hover:text-indigo-200';
  return (
    <nav className="absolute top-0 left-0 right-0 mx-auto flex w-screen max-w-6xl items-center justify-between py-4 px-6">
      <Logo />
      <div className="flex space-x-4">
        <a href="/" className={navLink}>
          Work
        </a>
        <a href="/" className={navLink}>
          Resume
        </a>
        <a href="/" className={navLink}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
