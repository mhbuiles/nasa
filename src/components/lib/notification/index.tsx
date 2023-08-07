import { Toaster, toast } from "react-hot-toast";

export const notification = {
  notificationRootEl: (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 4500,
        blank: {
          className:
            "text-white max-w-2xl py-4 px-5 bg-dark-blue border border-white",
        },
        success: {
          icon: null,
          className: "text-white max-w-2xl py-4 px-5 bg-green",
        },
        error: {
          icon: null,
          className: "text-white max-w-2xl py-4 px-5 bg-red",
        },
      }}
    />
  ),
  success: toast.success,
  info: toast,
  error: toast.error,
};
