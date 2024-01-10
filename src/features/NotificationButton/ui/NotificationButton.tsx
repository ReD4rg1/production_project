import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Icon } from "shared/ui/Icon/Icon";
import Notification from "shared/assets/icons/notification.svg";
import { VStack } from "shared/ui/Stack";
import { NotificationList } from "entities/Notification";
import { Popover } from "shared/ui/Popups";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;

  return (
    <Popover
      className={classNames("", {}, [className])}
      trigger={<Icon Svg={Notification} fill />}
      direction={"bottom left"}
    >
      <VStack>
        <NotificationList />
      </VStack>
    </Popover>
  );
});
