import { Menu, Transition, Switch } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo';
import MenuButton from '../assets/MenuButton';
import SettingButton from '../assets/SettingButton';
import SettingsModal from './SettingsModal';

const Navbar = () => {
  const pages: Array<'projects' | 'resume' | 'contact'> = ['projects', 'resume', 'contact'];
  const { pathname } = useLocation();
  const navigate = useNavigate();

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

  const [enabled, setEnabled] = useState(localStorage.shortcut === 'enabled' || !('shortcut' in localStorage));
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  useHotkeys('x', () => setIsDarkMode(!isDarkMode), [isDarkMode], { enabled });
  useHotkeys('p', () => navigate('projects'), { enabled });
  useHotkeys('r', () => navigate('resume'), { enabled });
  useHotkeys('s', () => setIsOpenSettings(!isOpenSettings), [isOpenSettings], { enabled });
  useHotkeys('c', () => navigate('contact'), { enabled });
  useHotkeys('h', () => navigate('/'), { enabled });

  useEffect(() => {
    if (enabled) {
      localStorage.shortcut = 'enabled';
    } else {
      localStorage.shortcut = 'disabled';
    }
  }, [enabled]);

  const navButton = (
    <div className="flex justify-end xs:hidden">
      <Menu>
        <Menu.Button>
          <MenuButton />
        </Menu.Button>
        <Transition
          as={Fragment}
          enterFrom="dropdown-transition-is-close origin-top-right"
          enterTo="dropdown-transition-is-open origin-top-right"
          enter="dropdown-transition"
          leave="dropdown-transition"
          leaveFrom="dropdown-transition-is-open origin-top-right"
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
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setIsOpenSettings(true)}
                  type="button"
                  className={`navbar__dropdown__toggle ${active ? 'active' : ''}`}
                >
                  Settings
                </button>
              )}
            </Menu.Item>
            <Menu.Item
              as="div"
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              {({ active }) => (
                <button
                  type="button"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`navbar__dropdown__toggle ${active ? 'active' : ''} w-full`}
                >
                  <Switch
                    checked={isDarkMode}
                    onChange={() => setIsDarkMode(!isDarkMode)}
                    className={`settings__toggle ${isDarkMode ? 'bg-green' : 'bg-color--toggle-bar'}`}
                    as="div"
                  >
                    <span className="sr-only">Toggle dark mode</span>
                    <span aria-hidden="true" className={`${isDarkMode ? 'translate-x-5' : 'translate-x-0'} `} />
                  </Switch>
                  <span className="ml-2">{isDarkMode ? 'Dark' : 'Light'}</span>
                </button>
              )}
            </Menu.Item>
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
      <div className="hidden items-center justify-end space-x-2 xs:flex">
        <button type="button" onClick={() => setIsOpenSettings(true)}>
          <SettingButton />
        </button>
      </div>
    </>
  );

  return (
    <nav className="navbar">
      <Link to="/">
        <Logo />
      </Link>
      {navButton}
      {navLinks}
      <SettingsModal
        isEnabled={enabled}
        toggleEnabled={() => setEnabled(!enabled)}
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        isOpen={isOpenSettings}
        closeModal={() => setIsOpenSettings(false)}
      />
    </nav>
  );
};

export default Navbar;
