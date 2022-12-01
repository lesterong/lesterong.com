const Alert = ({ message, isSuccess, handleClose, isShowing }: any) => {
  return (
    <div className="fixed bottom-6 z-10 flex w-screen justify-center px-6">
      <button
        className={`h-fit w-fit rounded-sm border-l-4 ${
          isSuccess ? 'border-l-green-100' : 'border-l-red-100'
        } bg-white px-4 py-2 shadow-sm transition-all duration-200 ${
          isShowing ? 'translate-y-0 motion-reduce:opacity-100' : 'translate-y-36 motion-reduce:opacity-0'
        }`}
        type="button"
        onClick={handleClose}
      >
        {message}
      </button>
    </div>
  );
};

export default Alert;
