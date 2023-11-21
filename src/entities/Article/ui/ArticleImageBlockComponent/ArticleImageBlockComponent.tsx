import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./ArticleImageBlockComponent.module.scss";
import { memo } from "react";
import { ArticleImageBlock } from "../../model/types/article";
import { Text, TextAlign } from "shared/ui/Text/Text";

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
  withSpace?: boolean;
}

export const ArticleImageBlockComponent = memo(
  (props: ArticleImageBlockComponentProps) => {
    const { className, block, withSpace } = props;

    const mods: Mods = {
      [cls.withSpace]: withSpace,
    };

    return (
      <div className={classNames(cls.wrapper, mods, [className])}>
        <img src={block.src} className={cls.img} alt={block.title} />
        {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
      </div>
    );
  }
);
