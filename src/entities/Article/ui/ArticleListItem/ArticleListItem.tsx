import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./ArticleListItem.module.scss";
import { memo, useCallback, useState } from "react";
import {
  Article,
  ArticleBlocksType,
  ArticleTextBlock,
  ArticleView,
} from "../../model/types/article";
import Eye from "shared/assets/icons/eye.svg";
import { Text, TextSize } from "shared/ui/Text/Text";
import { Button } from "shared/ui/Button/Button";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { useTranslation } from "react-i18next";
import { ArticleTextBlockComponent } from "entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.articleDetails + article.id);
  }, [article.id, navigate]);

  const mods: Mods = {
    [cls.flex]: !collapsed,
  };

  const content = article.blocks.find(
    (block) => block.type === ArticleBlocksType.TEXT
  ) as ArticleTextBlock;

  if (view === ArticleView.LIST) {
    return (
      <div className={classNames(cls.wrapper, {}, [className, cls[view]])}>
        <div className={cls.header}>
          <div className={cls.author}>
            <Avatar src={article.user.avatar} size={40} />
            <Text
              className={cls.username}
              size={TextSize.L}
              title={article.user.username}
            />
          </div>
          <Text className={cls.date} text={article.createdAt} />
        </div>
        <div className={cls.titleContainer} onClick={onOpenArticle}>
          <Text className={cls.title} title={article.title} />
        </div>
        <div className={classNames(cls.types, mods, [])}>
          {article.type.map((type, index) => (
            <div className={cls.type} key={index}>
              {type}
            </div>
          ))}
        </div>
        <div className={cls.image}>
          <img src={article.img} alt={""} />
        </div>
        <div>{content && <ArticleTextBlockComponent block={content} />}</div>
        <div className={cls.views}>
          <Button onClick={onOpenArticle}>{t("Читать дальше")}</Button>
          <div className={cls.views}>
            {article.views > 1000
              ? `${Math.floor(article.views / 1000)}.${article.views % 1}K`
              : article.views}
            <Eye />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(cls.wrapper, {}, [className, cls[view]])}>
      <div className={cls.image} onClick={onOpenArticle}>
        <img src={article.img} alt={""} />
        <Text className={cls.date} text={article.createdAt} />
      </div>
      <div className={cls.typesAndViews}>
        <div className={classNames(cls.types, mods, [])}>
          {article.type.map((type, index) => (
            <div className={cls.type} key={index}>
              {type}
            </div>
          ))}
        </div>
        <Button
          className={cls.collapseButton}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "<" : ">"}
        </Button>
        <div className={cls.views}>
          <Eye />
          {article.views > 1000
            ? `${Math.floor(article.views / 1000)}.${article.views % 1}K`
            : article.views}
        </div>
      </div>
      <div className={cls.titleContainer} onClick={onOpenArticle}>
        <Text className={cls.title} title={article.title} />
      </div>
    </div>
  );
});
