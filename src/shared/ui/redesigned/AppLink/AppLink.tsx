import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { LinkProps, NavLink } from "react-router-dom";
import { FC, ForwardedRef, forwardRef, ReactNode } from "react";

export type AppLinkTheme = "primary" | "secondary";

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkTheme;
  ref?: ForwardedRef<HTMLAnchorElement>;
  children?: ReactNode;
  activeClassName?: string;
}

export const AppLink: FC<AppLinkProps> = forwardRef((props, ref) => {
  const {
    to,
    className,
    children,
    variant = "primary",
    activeClassName = "",
    ...otherProps
  } = props;

  return (
    <NavLink
      to={to}
      ref={ref}
      className={({ isActive }) =>
        classNames(cls.AppLink, { [activeClassName]: isActive }, [
          className,
          cls[variant],
        ])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});
