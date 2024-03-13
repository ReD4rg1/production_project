import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export type TextVariant = "primary" | "error" | "accent";

export type TextAlign = "right" | "left" | "center";

export type TextSize = "m" | "l" | "xl";

type HeaderTagType = "h1" | "h2" | "h3";

const mapSizeToClass: Record<TextSize, string> = {
  m: "size_m",
  l: "size_l",
  xl: "size_xl",
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  m: "h3",
  l: "h2",
  xl: "h1",
};

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
  "data-testid"?: string;
}

export const Text = (props: TextProps) => {
  const {
    className,
    text,
    title,
    variant = "primary",
    align = "left",
    size = "l",
    "data-testid": dataTestId = "Text",
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];
  const sizeClass = mapSizeToClass[size];

  const additionalClasses = [className, cls[variant], cls[align], sizeClass];

  return (
    <div className={classNames(cls.text, {}, additionalClasses)}>
      {title && (
        <HeaderTag className={cls.title} data-testid={`${dataTestId}.Header`}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
          {text}
        </p>
      )}
    </div>
  );
};
