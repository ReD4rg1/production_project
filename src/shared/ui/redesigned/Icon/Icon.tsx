import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import cls from "./Icon.module.scss";
import { memo } from "react";

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, "onClick">;

interface IconBaseProps extends SvgProps {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
  fillIcon?: boolean;
}

interface NonClickableIconProps extends IconBaseProps {
  clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
  clickable: true;
  onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;

export const Icon = memo((props: IconProps) => {
  const {
    className,
    Svg,
    fillIcon,
    width = 32,
    height = 32,
    clickable,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.fillIcon]: fillIcon,
  };

  const icon = (
    <Svg
      width={width}
      height={height}
      className={classNames(cls.wrapper, mods, [className])}
      {...otherProps}
      onClick={undefined}
    />
  );

  if (clickable) {
    return (
      <button
        type="button"
        className={cls.button}
        onClick={props.onClick}
        style={{ height, width }}
      >
        {icon}
      </button>
    );
  }

  return icon;
});
