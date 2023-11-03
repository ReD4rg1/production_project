import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC, memo } from "react";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
  const { className, children, theme, size, disabled, ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [cls.disabled]: disabled,
  };

  return (
    <button
      disabled={disabled}
      className={classNames(cls.button, mods, [
        className,
        cls[theme],
        cls[size],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
