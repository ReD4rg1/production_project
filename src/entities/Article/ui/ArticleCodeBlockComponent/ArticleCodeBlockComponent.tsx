import { memo } from "react";
import { ArticleCodeBlock } from "../../model/types/article";
import { Code } from "shared/ui/Code/Code";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent.module.scss";

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
  withSpace?: boolean;
}

export const ArticleCodeBlockComponent = memo(
  (props: ArticleCodeBlockComponentProps) => {
    const { className, block, withSpace } = props;

    const mods: Mods = {
      [cls.withSpace]: withSpace,
    };

    return (
      <div className={classNames(cls.wrapper, mods, [className])}>
        <Code text={block.code} />
      </div>
    );
  }
);
