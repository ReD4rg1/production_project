import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NotificationItem.module.scss";
import { memo } from "react";
import { Notification } from "../../model/types/notification";
import { Text } from "@/shared/ui/Text";

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props;

  const content = (
    <div className={classNames(cls.wrapper, {}, [className])}>
      <Text title={item.title} text={item.description} />
    </div>
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
