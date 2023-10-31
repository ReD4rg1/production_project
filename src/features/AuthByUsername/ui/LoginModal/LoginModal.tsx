import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginFormAsync as LoginForm } from "../LoginForm/LoginForm.async";
import { Suspense } from "react";
import { Loader } from "shared/ui/Loader/Loader";

interface LoginFormProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal = (props: LoginFormProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal
      className={classNames("", {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginForm />
      </Suspense>
    </Modal>
  );
};
