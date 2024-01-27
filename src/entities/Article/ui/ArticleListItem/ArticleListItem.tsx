import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleListItem.module.scss";
import { HTMLAttributeAnchorTarget, memo, useState } from "react";
import { Article, ArticleTextBlock } from "../../model/types/article";
import Eye from "@/shared/assets/icons/eye.svg?react";
import { Text, TextSize } from "@/shared/ui/Text";
import { Button } from "@/shared/ui/Button";
import { Avatar } from "@/shared/ui/Avatar";
import { useTranslation } from "react-i18next";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { AppLink } from "@/shared/ui/AppLink";
import { ArticleBlocksType, ArticleView } from "../../model/consts/article";
import { getRouteArticleDetails } from "@/shared/const/router";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

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
        <AppLink to={getRouteArticleDetails(article.id)} target={target}>
          <div className={cls.titleContainer}>
            <Text className={cls.title} title={article.title} />
          </div>
        </AppLink>
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
          <AppLink to={getRouteArticleDetails(article.id)} target={target}>
            <Button>{t("Читать дальше")}</Button>
          </AppLink>
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
    <AppLink
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames(cls.wrapper, {}, [className, cls[view]])}
    >
      <div className={cls.image}>
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
      <div className={cls.titleContainer}>
        <Text className={cls.title} title={article.title} />
      </div>
    </AppLink>
  );
});
