import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleDetailsPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { CommentList } from "entities/Comment";
import { Text } from "shared/ui/Text/Text";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation("article");
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className={classNames(cls.wrapper, {}, [className])}>
        {t("Статья не найдена")}
      </div>
    );
  }

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      <ArticleDetails id={id} />
      <Text className={cls.commentsTitle} title={t("Комментарии")} />
      <CommentList
        isLoading={true}
        comments={[
          {
            id: "1",
            text: "some comment",
            articleId: "1",
            user: {
              id: "1",
              username: "JoJo",
              avatar:
                "https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj",
            },
          },
          {
            id: "2",
            text: "some comment 2",
            articleId: "1",
            user: {
              id: "1",
              username: "JoJo",
              avatar:
                "https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj",
            },
          },
        ]}
      />
    </div>
  );
};

export default memo(ArticleDetailsPage);
