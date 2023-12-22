import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleDetailsPageHeader.module.scss";
import { memo, useCallback } from "react";
import { Button } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { getArticleDetailsData } from "entities/Article";
import { getCanEditArticle } from "../../model/selectors/article";

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation("article");
    const navigate = useNavigate();
    const userData = useSelector(getUserAuthData);
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
      navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
      navigate(`${RoutePath.articleDetails}${article?.id}/edit`);
    }, [navigate, article]);

    return (
      <div className={classNames(cls.wrapper, {}, [className])}>
        <div className={cls.backButton}>
          <Button onClick={onBackToList}>{"<- " + t("Назад к списку")}</Button>
        </div>
        {canEdit && (
          <Button onClick={onEditArticle}>{t("Редактировать")}</Button>
        )}
      </div>
    );
  }
);
