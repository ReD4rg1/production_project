import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";
import { CSSProperties, useMemo } from "react";
import { AppImage } from "../../redesigned/AppImage";
import UserIcon from "@/shared/assets/icons/profile.svg?react";
import { Icon } from "../../redesigned/Icon";
import { Skeleton } from "../Skeleton";

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
}

export const Avatar = (props: AvatarProps) => {
  const { className, src = "", size = 100, alt = "" } = props;

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  const fallback = <Skeleton width={size} height={size} border={"50%"} />;
  const errorFallback = (
    <Icon width={size} height={size} Svg={UserIcon} fillIcon />
  );

  return (
    <AppImage
      src={src}
      alt={alt}
      fallback={fallback}
      errorFallback={errorFallback}
      style={styles}
      className={classNames(cls.avatar, {}, [className])}
    />
  );
};
