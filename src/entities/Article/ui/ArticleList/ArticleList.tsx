import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleList.module.scss";
import { memo } from "react";
import { Article } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import { Text } from "@/shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { ArticleView } from "../../model/consts/article";

interface ArticleListProps {
  className?: string;
  articles?: Article[];
  isLoading?: boolean;
  view: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.GRID ? 12 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, view, isLoading } = props;
  const { t } = useTranslation();

  const renderArticle = (article: Article, index: number) => (
    <ArticleListItem
      key={index}
      article={article}
      view={view}
      target={"_blank"}
    />
  );

  if (!articles || (!isLoading && !articles.length)) {
    return (
      <div className={classNames(cls.wrapper, {}, [className, cls[view]])}>
        <Text title={t("Статьи не найдены")} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.wrapper, {}, [className, cls[view]])}>
      {articles.length > 0
        ? articles?.map((article, index) => renderArticle(article, index))
        : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
