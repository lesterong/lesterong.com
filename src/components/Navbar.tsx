import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo';
import MenuButton from '../assets/MenuButton';

const Navbar = () => {
  const MENU_WIDTH: number = 368;
  const [isButton, setIsButton] = useState(window.innerWidth < MENU_WIDTH);

  const pages: Array<'projects' | 'resume' | 'contact'> = ['projects', 'resume', 'contact'];
  const { pathname } = useLocation();

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
          enterFrom="opacity-0 scale-75 origin-top-right"
          enterTo="opacity-100 scale-100 origin-top-right"
          enter="transition ease-in-out duration-150"
          leave="transition ease-in-out duration-150"
          leaveFrom="opacity-100 scale-100 origin-top-right"
          leaveTo="opacity-0 scale-75 origin-top-right"
        >
          <Menu.Items className="absolute z-10 mt-1 flex w-auto cursor-pointer flex-col overflow-auto rounded-md border border-gray-100/30 bg-white py-2 text-base shadow-sm">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/"
                  className={`py-1 pl-2 pr-8 font-display ${pathname === '/' ? 'font-semibold' : ''} ${
                    active ? 'bg-indigo-100/30' : 'bg-white'
                  }`}
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
                    className={`py-1 pl-2 pr-8 font-display ${pathname === `/${page}` ? 'font-semibold' : ''} ${
                      active ? 'bg-indigo-100/30' : 'bg-white'
                    }`}
                  >
                    {page.substring(0, 1).toUpperCase() + page.substring(1).toLowerCase()}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );

  const navLinks = (
    <div className="flex space-x-4">
      {pages.map((page) => (
        <Link
          key={page}
          to={page}
          className={`font-display font-semibold transition duration-300 ease-in-out hover:text-indigo-200 ${
            pathname === `/${page}` ? 'text-indigo-200' : ''
          }`}
        >
          {page.substring(0, 1).toUpperCase() + page.substring(1).toLowerCase()}
        </Link>
      ))}
    </div>
  );

  return (
    <nav className="absolute top-0 left-0 right-0 mx-auto flex w-screen max-w-6xl items-center justify-between py-4 px-6">
      <Link to="/">
        <Logo />
      </Link>
      {isButton ? navButton : navLinks}
    </nav>
  );
};

export default Navbar;
