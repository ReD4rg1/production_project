import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SortSelector.module.scss";
import { memo, useMemo } from "react";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { useTranslation } from "react-i18next";
import { ArticleSortField } from "entities/Article/model/types/article";
import { SortOrder } from "shared/types";

interface SortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const SortSelector = memo((props: SortSelectorProps) => {
  const { className, onChangeSort, sort, onChangeOrder, order } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      { value: SortOrder.ASC, content: t("возрастанию") },
      { value: SortOrder.DESC, content: t("убыванию") },
    ],
    [t]
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      { value: ArticleSortField.CREATED, content: t("дате создания") },
      { value: ArticleSortField.TITLE, content: t("названию") },
      { value: ArticleSortField.VIEWS, content: t("просмотрам") },
    ],
    [t]
  );

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      <Select
        className={cls.select}
        options={sortFieldOptions}
        label={t("Сортировать по")}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        className={cls.select}
        options={orderOptions}
        label={t("по")}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
});
