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

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.GRID ? 12 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, view, isLoading } = props;

  const renderArticle = (article: Article, index: number) => (
    <ArticleListItem key={index} article={article} view={view} />
  );

  return (
    <div className={classNames(cls.wrapper, {}, [className, cls[view]])}>
      {articles.length > 0
        ? articles?.map((article, index) => renderArticle(article, index))
        : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
