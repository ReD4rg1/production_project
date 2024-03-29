import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Text } from "@/shared/ui/Text";
import { ArticleList, ArticleView } from "@/entities/Article";
import { VStack } from "@/shared/ui/Stack";
import { useArticleRecommendationsList } from "../../api/articleRecommendationsApi";

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
      isLoading,
      data: articles,
      error,
    } = useArticleRecommendationsList(3);

    if (isLoading || error) {
      return null;
    }

    return (
      <VStack
        data-testid="ArticleRecommendationsList"
        gap={"8"}
        className={classNames("", {}, [className])}
      >
        <Text title={t("Рекомендуем")} />
        <ArticleList articles={articles} view={ArticleView.GRID} />
      </VStack>
    );
  }
);
