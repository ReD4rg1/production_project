import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import React, { ReactNode } from "react";
import { Portal } from "../../redesigned/Portal/Portal";
import { Overlay } from "../../redesigned/Overlay/Overlay";
import { useModal } from "@/shared/lib/hooks/useModal/useModal";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}
/**
 * @deprecated
 * */
export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;
  const { isClosing, isMounted, close } = useModal({
    animationDelay: 300,
    isOpen,
    onClose,
  });

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className])}>
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
