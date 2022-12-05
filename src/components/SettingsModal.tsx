import { Fragment } from 'react';
import { Transition, Dialog, Switch } from '@headlessui/react';

const SettingsModal = ({ isEnabled, toggleEnabled, isDarkMode, setIsDarkMode, isOpen, closeModal }: any) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="bg-color--secondary w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3">Settings</Dialog.Title>
                <div className="settings__item">
                  <Switch
                    checked={isDarkMode}
                    onChange={() => setIsDarkMode(!isDarkMode)}
                    className={`settings__toggle ${isDarkMode ? 'bg-green' : 'bg-color--toggle-bar'}`}
                    as="div"
                  >
                    <span className="sr-only">Toggle dark mode</span>
                    <span aria-hidden="true" className={`${isDarkMode ? 'translate-x-5' : 'translate-x-0'} `} />
                  </Switch>
                  <span>Enable dark mode</span>
                </div>
                <hr className="border-color--dropdown" />
                <div className="settings__item">
                  <Switch
                    checked={isEnabled}
                    onChange={toggleEnabled}
                    className={`settings__toggle ${isEnabled ? 'bg-green' : 'bg-color--toggle-bar'}`}
                    as="div"
                  >
                    <span className="sr-only">Toggle keyboard shortcuts</span>
                    <span aria-hidden="true" className={`${isEnabled ? 'translate-x-5' : 'translate-x-0'} `} />
                  </Switch>
                  <span>Enable keyboard shortcuts</span>
                </div>
                <ul className="shortcuts-list">
                  <li>
                    <kbd>c</kbd>
                    <span>Navigate to contact page</span>
                  </li>
                  <li>
                    <kbd>p</kbd>
                    <span>Navigate to projects page</span>
                  </li>
                  <li>
                    <kbd>r</kbd>
                    <span>Navigate to resume page</span>
                  </li>
                  <li>
                    <kbd>x</kbd>
                    <span>Toggle dark mode</span>
                  </li>
                </ul>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SettingsModal;
