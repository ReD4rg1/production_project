import { classNames } from "@/shared/lib/classNames/classNames";
import React, { memo, useCallback } from "react";
import { RatingCard } from "@/entities/Rating";
import { useGetArticleRating, useRateArticle } from "../api/articleRatingApi";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { useTranslation } from "react-i18next";

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const userData = useSelector(getUserAuthData);
  const { t } = useTranslation();

  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id || "",
  });
  const [rateArticleMutation] = useRateArticle();

  const rating = data?.[0];

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          userId: userData?.id || "",
          articleId,
          rate: starsCount,
          feedback,
        });
      } catch (e) {}
    },
    [articleId, rateArticleMutation, userData?.id]
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle]
  );
  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle]
  );

  if (isLoading) {
    return <Skeleton width={"100%"} height={120} />;
  }

  return (
    <div className={classNames("", {}, [className])}>
      <RatingCard
        onCancel={onCancel}
        onAccept={onAccept}
        title={rating?.rate ? t("Спасибо за отзыв") : t("Оцените статью")}
        feedbackTitle={t("Оставьте отзыв о статье")}
        hasFeedback
        rate={rating?.rate}
      />
    </div>
  );
});

export default ArticleRating;
