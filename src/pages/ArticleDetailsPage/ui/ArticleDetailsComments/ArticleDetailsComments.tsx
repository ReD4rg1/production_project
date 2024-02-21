import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, Suspense, useCallback } from "react";
import { Text } from "@/shared/ui/deprecated/Text";
import cls from "../ArticleDetailsPage/ArticleDetailsPage.module.scss";
import { AddCommentForm } from "@/features/addCommentForm";
import { CommentList } from "@/entities/Comment";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { getArticleComments } from "../../model/slices";
import {
  getArticleDetailsCommentsIsLoading,
  getArticleDetailsCommentsError,
} from "../../model/selectors/comments";
import { useTranslation } from "react-i18next";
import { VStack } from "@/shared/ui/deprecated/Stack";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Loader } from "@/shared/ui/deprecated/Loader";

interface ArticleDetailsCommentsProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsComments = memo(
  (props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;
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

    useInitialEffect(() => {
      dispatch(fetchCommentsByArticleId(id));
    });

    return (
      <VStack gap={"16"} className={classNames("", {}, [className])}>
        <Text className={cls.commentsTitle} title={t("Комментарии")} />
        <Suspense fallback={<Loader />}>
          <AddCommentForm onSendComment={onSendComment} />
        </Suspense>
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
          error={commentsError}
        />
      </VStack>
    );
  }
);
