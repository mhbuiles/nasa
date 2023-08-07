import { Dialog } from "@headlessui/react";
import { FaTimes } from "react-icons/fa";

const overlayClassName =
  "fixed inset-0 bg-transparent backdrop-blur-md backdrop-brightness-50";

type CommonModalProps = {
  open: boolean;
  children?: React.ReactNode;
  initialFocus?: React.MutableRefObject<HTMLElement | null>;
  topContent?: React.ReactNode;
};

type ClosableModalProps = {
  closable?: true;
  onClose: () => void;
} & CommonModalProps;

type NotClosableModalProps = {
  closable: false;
  onClose?: never;
} & CommonModalProps;

const Modal = ({
  children,
  open,
  onClose,
  initialFocus,
  topContent,
  closable = true,
}: ClosableModalProps | NotClosableModalProps): React.ReactElement => (
  <Dialog
    open={open}
    onClose={onClose ? onClose : () => null}
    initialFocus={initialFocus}
    className="fixed inset-0 z-20"
  >
    <div className="grid min-h-screen w-screen place-items-center">
      {closable ? (
        <Dialog.Overlay className={overlayClassName} />
      ) : (
        <div className={overlayClassName} />
      )}
      <div className="relative rounded-3xl border border-white border-opacity-30 bg-white bg-opacity-10 p-4 shadow-2xl backdrop-blur-3xl">
        <div className="absolute inset-x-0 -top-10 grid place-items-center">
          {topContent}
        </div>
        <div className="absolute inset-x-0 top-0 flex justify-end pt-4 pr-5">
          {closable ? (
            <button
              type="button"
              className="rounded-full text-white text-opacity-60 transition-colors hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-blue"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <FaTimes className="h-6 w-6" aria-hidden="true" />
            </button>
          ) : null}
        </div>
        {children}
      </div>
    </div>
  </Dialog>
);

const { Title: ModalTitle, Description: ModalDescription } = Dialog;

export { Modal, ModalTitle, ModalDescription };
