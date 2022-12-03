import { Menu, Transition, Switch } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo';
import MenuButton from '../assets/MenuButton';

const Navbar = () => {
  const MENU_WIDTH: number = 538;
  const [isButton, setIsButton] = useState(window.innerWidth < MENU_WIDTH);

  const pages: Array<'projects' | 'resume' | 'contact'> = ['projects', 'resume', 'contact'];
  const { pathname } = useLocation();

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector('html')?.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.querySelector('html')?.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);

  useEffect(
    () => window.addEventListener('resize', () => setIsButton(window.innerWidth < MENU_WIDTH)),
    [window.innerWidth]
  );

  const navButton = (
    <div className="flex justify-end">
      <Menu>
        <Menu.Button>
          <MenuButton />
        </Menu.Button>
        <Transition
          as={Fragment}
          enterFrom="dropdown-transition-is-close"
          enterTo="dropdown-transition-is-open origin-top-right"
          enter="dropdown-transition"
          leave="dropdown-transition"
          leaveFrom="dropdown-transition-is-open"
          leaveTo="dropdown-transition-is-close origin-top-right"
        >
          <Menu.Items className="navbar__dropdown">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/"
                  className={`navbar__dropdown__item ${pathname === '/' ? 'selected' : ''} ${active ? 'active' : ''}`}
                >
                  Home
                </Link>
              )}
            </Menu.Item>
            {pages.map((page) => (
              <Menu.Item key={page}>
                {({ active }) => (
                  <Link
                    to={page}
                    className={`navbar__dropdown__item ${pathname === `/${page}` ? 'selected' : ''} ${
                      active ? 'active' : ''
                    }`}
                  >
                    {page.substring(0, 1).toUpperCase() + page.substring(1).toLowerCase()}
                  </Link>
                )}
              </Menu.Item>
            ))}
            <button
              type="button"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="border-color--dropdown flex items-center justify-start border-t py-2 pl-2"
            >
              <Switch
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
                className="navbar__toggle"
                as="div"
              >
                <span className="sr-only">Toggle dark mode</span>
                <span aria-hidden="true" className={`${isDarkMode ? 'translate-x-5' : 'translate-x-0'} `} />
              </Switch>
              <span className="ml-2">{isDarkMode ? 'Dark' : 'Light'}</span>
            </button>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );

  const navLinks = (
    <>
      <div className="navbar__links">
        {pages.map((page) => (
          <Link key={page} to={page} className={`${pathname === `/${page}` ? 'selected' : ''}`}>
            {page.substring(0, 1).toUpperCase() + page.substring(1).toLowerCase()}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-end space-x-2">
        <span className="ml-2">{isDarkMode ? 'Dark' : 'Light'}</span>
        <Switch checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} className="navbar__toggle" as="div">
          <span className="sr-only">Toggle dark mode</span>
          <span aria-hidden="true" className={`${isDarkMode ? 'translate-x-5' : 'translate-x-0'} `} />
        </Switch>
      </div>
    </>
  );

  return (
    <nav className="navbar">
      <Link to="/">
        <Logo />
      </Link>
      {isButton ? navButton : navLinks}
    </nav>
  );
};

export default Navbar;
