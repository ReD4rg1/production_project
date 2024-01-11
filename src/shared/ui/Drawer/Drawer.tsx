import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./Drawer.module.scss";
import { memo, ReactNode } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { Portal } from "../../ui/Portal/Portal";
import { Overlay } from "../../ui/Overlay/Overlay";
import { useModal } from "shared/lib/hooks/useModal/useModal";

interface DrawerProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
  const { className, onClose, isOpen, children, lazy } = props;
  const { theme } = useTheme();

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
      <div
        className={classNames(cls.wrapper, mods, [
          className,
          theme,
          "app_drawer",
        ])}
      >
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});
