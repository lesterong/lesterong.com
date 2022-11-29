import Logo from '../assets/Logo';

const Navbar = () => {
  const navLink = 'cursor-pointer font-display font-semibold';
  return (
    <nav className="absolute top-0 left-0 right-0 mx-auto flex w-screen max-w-6xl items-center justify-between py-4 px-6">
      <Logo />
      <div className="flex space-x-4">
        <div className={navLink}> Work </div>
        <div className={navLink}> Resume </div>
        <div className={navLink}> Contact </div>
      </div>
    </nav>
  );
};

export default Navbar;
