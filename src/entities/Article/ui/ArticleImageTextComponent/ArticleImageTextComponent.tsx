import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleImageTextComponent.module.scss";

interface ArticleImageTextComponentProps {
  className?: string;
}

export const ArticleImageTextComponent = (
  props: ArticleImageTextComponentProps
) => {
  const { className } = props;

  return <div className={classNames(cls.wrapper, {}, [className])}></div>;
};
