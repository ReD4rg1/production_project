import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleListItem.module.scss";
import { memo } from "react";
import { Article, ArticleView } from "../../model/types/article";
import Eye from "shared/assets/icons/eye.svg";
import { Text } from "shared/ui/Text/Text";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view } = props;

  return (
    <div className={classNames(cls.wrapper, {}, [className, cls[view]])}>
      <div className={cls.image}>
        <img src={article.img} />
        <Text className={cls.date} text={article.createdAt} />
      </div>
      <div className={cls.typesAndViews}>
        <div className={cls.types}>
          {article.type.map((type, index) => (
            <div className={cls.type} key={index}>
              {type}
            </div>
          ))}
        </div>
        <div className={cls.views}>
          <Eye />
          {article.views > 1000
            ? `${Math.floor(article.views / 1000)}.${article.views % 1}K`
            : article.views}
        </div>
      </div>
      <Text className={cls.title} title={article.title} />
    </div>
  );
});
