import { classNames } from "shared/lib/classNames/classNames";
import cls from "./CommentList.module.scss";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { CommentCard } from "../CommentCard/CommentCard";
import { CommentType } from "entities/Comment";

interface CommentListProps {
  className?: string;
  comments?: CommentType[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard comment={comment} key={comment.id} />
        ))
      ) : isLoading ? (
        <CommentCard isLoading />
      ) : (
        <Text text={t("Нет комментариев")} />
      )}
    </div>
  );
});
