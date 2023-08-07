import { useCallback, useState } from "react";

/**
 * Custom hook used to help handle common `open`, `close`, or `toggle` scenarios.
 * It can be used to control feedback component such as `Modal`.
 */
export const useDisclosure = (
  defaultOpen = false
): {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
} => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const close = useCallback(() => setIsOpen(false), []);

  const open = useCallback(() => setIsOpen(true), []);

  const toggle = useCallback(() => setIsOpen((isOpen) => !isOpen), []);

  return { isOpen, toggle, open, close };
};
