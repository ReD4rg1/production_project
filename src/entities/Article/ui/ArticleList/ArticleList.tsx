import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleList.module.scss";
import { memo } from "react";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "entities/Article/ui/ArticleListItem/ArticleListItemSkeleton";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, view, isLoading } = props;

  const renderArticle = (article: Article, index: number) => (
    <ArticleListItem key={index} article={article} view={view} />
  );

  if (isLoading) {
    return (
      <div className={classNames(cls.wrapper, {}, [className, cls[view]])}>
        <ArticleListItemSkeleton view={view} />
        <ArticleListItemSkeleton view={view} />
        <ArticleListItemSkeleton view={view} />
        <ArticleListItemSkeleton view={view} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.wrapper, {}, [className, cls[view]])}>
      {articles.length > 0
        ? articles?.map((article, index) => renderArticle(article, index))
        : null}
    </div>
  );
});
