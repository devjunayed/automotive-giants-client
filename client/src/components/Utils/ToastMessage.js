import { toast } from 'react-toastify';

 const ToastMessage = (message) => {
  return toast.error(message, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
}

export default ToastMessage;