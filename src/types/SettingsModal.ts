export type SettingsModalProps = {
  isEnabled: boolean;
  toggleEnabled: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isOpen: boolean;
  closeModal: () => void;
};
