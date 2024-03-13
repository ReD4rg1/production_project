import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NotificationItem.module.scss";
import { memo } from "react";
import { Notification } from "../../model/types/notification";
import { Text as TextDeprecated } from "@/shared/ui/deprecated/Text";
import { Text } from "@/shared/ui/redesigned/Text";
import { ToggleFeatures } from "@/shared/lib/features";
import { Card } from "@/shared/ui/redesigned/Card";

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props;

  const content = (
    <ToggleFeatures
      feature={"isAppRedesigned"}
      on={
        <Card className={classNames(cls.wrapper, {}, [className])}>
          <Text title={item.title} text={item.description} />
        </Card>
      }
      off={
        <div className={classNames(cls.wrapper, {}, [className])}>
          <TextDeprecated title={item.title} text={item.description} />
        </div>
      }
    />
  );

  if (item.href) {
    return (
      <a
        className={cls.link}
        target={"_blank"}
        href={item.href}
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return content;
});
