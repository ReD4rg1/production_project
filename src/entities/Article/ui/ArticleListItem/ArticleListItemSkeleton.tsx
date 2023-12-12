import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleListItem.module.scss";
import { memo } from "react";
import { ArticleView } from "../../model/types/article";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Card } from "shared/ui/Card/Card";

interface ArticleListItemProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemProps) => {
  const { className, view } = props;

  if (view === ArticleView.LIST) {
    return (
      <div className={classNames(cls.wrapper, {}, [className, cls[view]])}>
        <Card>
          <div className={cls.header}>
            <div className={cls.author}>
              <Skeleton border="50%" height={30} width={30} />
              <Skeleton width={150} height={16} className={cls.username} />
            </div>
            <Skeleton width={100} height={16} className={cls.date} />
          </div>
          <div className={cls.titleContainer}>
            <Skeleton width={250} height={24} className={cls.title} />
          </div>
          <Skeleton width={150} height={24} className={cls.types} />
          <Skeleton height={200} width={200} className={cls.image} />
          <Skeleton height={100} width={800} />
          <div className={cls.views}>
            <Skeleton height={36} width={200} />
            <Skeleton height={20} width={100} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.wrapper, {}, [className, cls[view]])}>
      <Card>
        <div className={cls.image}>
          <Skeleton width={200} height={200} className={cls.image} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={cls.title} />
      </Card>
    </div>
  );
});
