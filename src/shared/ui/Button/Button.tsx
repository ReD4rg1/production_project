import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC, memo } from "react";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  OUTLINE_RED = "outline_red",
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
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
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
