import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticlesPage.module.scss";
import { memo } from "react";
import { ArticleList, ArticleView } from "entities/Article";
import {
  DynamicModuleLoader,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  articlePageReducer,
  getArticles,
} from "../../model/slices/articlePageSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { useSelector } from "react-redux";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
} from "../../model/selectors/articles";

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducerList = {
  articlesPage: articlePageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.wrapper, {}, [className])}>
        <ArticleList
          articles={articles}
          isLoading={isLoading}
          view={ArticleView.LIST}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
