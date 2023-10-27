import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";

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
      <LoginForm />
    </Modal>
  );
};
