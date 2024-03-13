import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import cls from "./Card.module.scss";
import { HTMLAttributes, memo, ReactNode } from "react";

export type CardVariant = "normal" | "outlined" | "light";
export type CardPadding = "0" | "8" | "16" | "24";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  max?: boolean;
  padding?: CardPadding;
}

const mapPaddingToClass: Record<CardPadding, string> = {
  "0": "gap_0",
  "8": "gap_0",
  "16": "gap_0",
  "24": "gap_0",
};

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    variant = "normal",
    padding = "8",
    max,
    ...otherProps
  } = props;

  const paddingClass = mapPaddingToClass[padding];
  const mods: Mods = {
    [cls.max]: max,
  };

  return (
    <div
      className={classNames(cls.wrapper, mods, [
        className,
        cls[variant],
        cls[paddingClass],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
