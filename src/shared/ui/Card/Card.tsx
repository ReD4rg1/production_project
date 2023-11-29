import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Card.module.scss";
import { memo, ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
}

export const Card = memo((props: CardProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <div className={classNames(cls.wrapper, {}, [className])} {...otherProps}>
      {children}
    </div>
  );
});
