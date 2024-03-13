import React, { memo } from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import cls from "./Icon.module.scss";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
  fillIcon?: boolean;
}

/**
 * @deprecated
 */
export const Icon = memo((props: IconProps) => {
  const { className, Svg, fillIcon, ...otherProps } = props;

  const mods: Mods = {
    [cls.fillIcon]: fillIcon,
  };

  return (
    <Svg
      className={classNames(cls.wrapper, mods, [className])}
      {...otherProps}
    />
  );
});
