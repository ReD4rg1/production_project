import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticlesPageFilter.module.scss";
import { memo, useCallback } from "react";
import { Select } from "shared/ui/Select/Select";
import { useTranslation } from "react-i18next";
import { ViewSelector } from "features/ViewSelector";
import { useSelector } from "react-redux";
import { getArticlesPageView } from "../../model/selectors/articles";
import { ArticleView } from "entities/Article";
import { articlePageActions } from "../../model/slices/articlePageSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";

interface ArticlesPageFilterProps {
  className?: string;
}

export const ArticlesPageFilter = memo((props: ArticlesPageFilterProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const view = useSelector(getArticlesPageView);
  const dispatch = useAppDispatch();

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlePageActions.setView(view));
    },
    [dispatch]
  );

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      <div className={cls.sortWrapper}>
        <Select className={cls.select} label={t("Сортировка")} />
        <ViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input placeholder={t("Поиск")} />
      </Card>
    </div>
  );
});
