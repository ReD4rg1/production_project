import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticlesPageFilter.module.scss";
import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ViewSelector } from "features/ViewSelector";
import { useSelector } from "react-redux";
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from "../../model/selectors/articles";
import { ArticleSortField, ArticleView } from "entities/Article";
import { articlePageActions } from "../../model/slices/articlePageSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Card, CardTheme } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";
import { SortSelector } from "features/SortSelector";
import { SortOrder } from "shared/types";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { ArticleType } from "entities/Article/model/types/article";

interface ArticlesPageFilterProps {
  className?: string;
}

export const ArticlesPageFilter = memo((props: ArticlesPageFilterProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const view = useSelector(getArticlesPageView);
  const dispatch = useAppDispatch();
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);
  const tab = useSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 700);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlePageActions.setView(view));
    },
    [dispatch]
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlePageActions.setOrder(newOrder));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [fetchData, dispatch]
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlePageActions.setSort(newSort));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [fetchData, dispatch]
  );

  const onChangeSearch = useCallback(
    (value: string) => {
      dispatch(articlePageActions.setSearch(value));
      dispatch(articlePageActions.setPage(1));
      debouncedFetchData();
    },
    [debouncedFetchData, dispatch]
  );

  const onChangeType = useCallback(
    (tab: TabItem) => {
      dispatch(articlePageActions.setType(tab.value as ArticleType));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [fetchData, dispatch]
  );

  const typeTabs = useMemo<TabItem[]>(
    () => [
      ...Object.entries(ArticleType).map(([name, value]): TabItem => {
        return { value, content: t(value) };
      }),
    ],
    [t]
  );

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      <div className={cls.sortWrapper}>
        <SortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search} theme={CardTheme.OUTLINED}>
        <Input
          placeholder={t("Поиск")}
          value={search}
          onChange={onChangeSearch}
        />
      </Card>
      <Tabs
        className={cls.tabs}
        tabs={typeTabs}
        value={tab}
        onTabClick={onChangeType}
      />
    </div>
  );
});
