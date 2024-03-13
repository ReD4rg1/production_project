import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ViewSelector.module.scss";
import { memo } from "react";
import GridIcon from "@/shared/assets/icons/grid.svg?react";
import ListIcon from "@/shared/assets/icons/list.svg?react";
import { ArticleView } from "@/entities/Article";
import { Button } from "@/shared/ui/redesigned/Button";
import { Icon } from "@/shared/ui/redesigned/Icon";

interface ViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  { view: ArticleView.GRID, icon: GridIcon },
  { view: ArticleView.LIST, icon: ListIcon },
];

export const ViewSelector = memo((props: ViewSelectorProps) => {
  const { className, onViewClick, view } = props;

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      {viewTypes.map((viewType, index) => (
        <Button
          key={index}
          variant={"clear"}
          onClick={() => onViewClick?.(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames("", {
              [cls.nonSelected]: viewType.view !== view,
            })}
          />
        </Button>
      ))}
    </div>
  );
});
