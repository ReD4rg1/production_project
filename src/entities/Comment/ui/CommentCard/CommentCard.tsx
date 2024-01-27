import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./CommentCard.module.scss";
import { memo } from "react";
import { CommentType } from "../../model/types/commentType";
import { Text } from "@/shared/ui/Text";
import { Avatar } from "@/shared/ui/Avatar";
import { Skeleton } from "@/shared/ui/Skeleton";
import { AppLink } from "@/shared/ui/AppLink";
import { VStack } from "@/shared/ui/Stack";
import { getRouteProfile } from "@/shared/const/router";

interface CommentCardProps {
  className?: string;
  comment?: CommentType;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div
        className={classNames(cls.wrapper, { [cls.isLoading]: isLoading }, [
          className,
        ])}
      >
        <div className={cls.header}>
          <Skeleton
            className={cls.avatar}
            height={30}
            width={30}
            border={"50%"}
          />
          <Skeleton height={16} width={50} />
        </div>
        <Skeleton height={50} width={"100%"} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack className={classNames(cls.wrapper, {}, [className])}>
      <AppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
        <Avatar className={cls.avatar} size={30} src={comment?.user.avatar} />
        <Text title={comment?.user.username} />
      </AppLink>
      <Text text={comment?.text} />
    </VStack>
  );
});
