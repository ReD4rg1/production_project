import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { Text } from "shared/ui/Text/Text";
import cls from "../ArticleDetailsPage/ArticleDetailsPage.module.scss";
import { AddCommentForm } from "features/addCommentForm";
import { CommentList } from "entities/Comment";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { getArticleComments } from "../../model/slices";
import {
  getArticleDetailsCommentsIsLoading,
  getArticleDetailsCommentsError,
} from "../../model/selectors/comments";
import { useTranslation } from "react-i18next";

interface ArticleDetailsCommentsProps {
  className?: string;
}

export const ArticleDetailsComments = memo(
  (props: ArticleDetailsCommentsProps) => {
    const { className } = props;
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
    const commentsError = useSelector(getArticleDetailsCommentsError);
    const dispatch = useAppDispatch();
    const { t } = useTranslation("article");

    const onSendComment = useCallback(
      (text: string) => {
        dispatch(addCommentForArticle(text));
      },
      [dispatch]
    );

    return (
      <div className={classNames("", {}, [className])}>
        <Text className={cls.commentsTitle} title={t("Комментарии")} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
          error={commentsError}
        />
      </div>
    );
  }
);
