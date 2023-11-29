import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticlesPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleList } from "entities/Article";
import { articleMock } from "entities/Article/mocks/data";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation("article");

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      <ArticleList
        articles={[
          articleMock,
          articleMock,
          articleMock,
          articleMock,
          articleMock,
          articleMock,
          articleMock,
          articleMock,
        ]}
      />
    </div>
  );
};

export default memo(ArticlesPage);
