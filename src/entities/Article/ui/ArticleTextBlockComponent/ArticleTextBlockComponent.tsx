import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./ArticleTextBlockComponent.module.scss";
import { memo } from "react";
import { ArticleTextBlock } from "../../model/types/article";
import { Text } from "shared/ui/Text/Text";

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
  withSpace?: boolean;
}

export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className, block, withSpace } = props;

    const mods: Mods = {
      [cls.withSpace]: withSpace,
    };

    return (
      <div className={classNames(cls.wrapper, mods, [className])}>
        <Text title={block.title} text={block.paragraphs.join("\n")} />
      </div>
    );
  }
);
