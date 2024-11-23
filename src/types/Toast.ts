export type ToastProps = {
  message: string;
  isSuccess?: boolean;
  isShowing: boolean;
  handleClose: () => void;
};
