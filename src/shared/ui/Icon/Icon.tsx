import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import cls from "./Icon.module.scss";
import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
  fillIcon?: boolean;
}

export const Icon = memo((props: IconProps) => {
  const {
    className,
    Svg,
    fillIcon,
    width = 40,
    height = 40,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.fillIcon]: fillIcon,
  };

  return (
    <Svg
      width={width}
      height={height}
      className={classNames(cls.wrapper, mods, [className])}
      {...otherProps}
    />
  );
});
