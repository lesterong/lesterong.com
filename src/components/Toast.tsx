import { ToastProps } from '../types/Toast';

const Toast = ({ message, isSuccess, handleClose, isShowing }: ToastProps) => {
  return (
    <div className="toast">
      <button
        className={`${isSuccess ? 'success' : 'failure'} ${
          isShowing ? 'toast-content-is-open' : 'toast-content-is-close hidden'
        }`}
        type="button"
        onClick={handleClose}
      >
        {message}
      </button>
    </div>
  );
};

export default Toast;
