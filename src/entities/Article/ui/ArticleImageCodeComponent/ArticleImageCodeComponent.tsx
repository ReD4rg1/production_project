import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleImageCodeComponent.module.scss";

interface ArticleImageCodeComponentProps {
  className?: string;
}

export const ArticleImageCodeComponent = (
  props: ArticleImageCodeComponentProps
) => {
  const { className } = props;

  return <div className={classNames(cls.wrapper, {}, [className])}></div>;
};
