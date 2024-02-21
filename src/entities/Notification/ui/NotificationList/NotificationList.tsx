import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { useNotifications } from "../../api/notificationApi";
import { useTranslation } from "react-i18next";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { VStack } from "@/shared/ui/deprecated/Stack";
import { Skeleton } from "@/shared/ui/deprecated/Skeleton";

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 10000,
  });

  if (isLoading) {
    return (
      <VStack
        max
        gap={"16"}
        justify={"center"}
        align={"center"}
        className={classNames("", {}, [className])}
      >
        <Skeleton width={"100%"} border={"8px"} height={"80px"} />
        <Skeleton width={"100%"} border={"8px"} height={"80px"} />
        <Skeleton width={"100%"} border={"8px"} height={"80px"} />
      </VStack>
    );
  }

  if (!data) {
    return <div>{t("Нет уведомлений")}</div>;
  }

  return (
    <VStack max gap={"16"} className={classNames("", {}, [className])}>
      {data.map((item) => (
        <NotificationItem item={item} key={item.id} />
      ))}
    </VStack>
  );
});
