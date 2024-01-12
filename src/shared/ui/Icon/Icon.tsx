import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import cls from "./Icon.module.scss";
import { memo } from "react";

interface IconProps {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
  fill?: boolean;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg, fill } = props;

  const mods: Mods = {
    [cls.fill]: fill,
  };

  return <Svg className={classNames(cls.wrapper, mods, [className])} />;
});
