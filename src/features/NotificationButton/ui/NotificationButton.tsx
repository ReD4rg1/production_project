import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, useCallback, useState } from "react";
import { Icon } from "@/shared/ui/Icon";
import Notification from "@/shared/assets/icons/notification.svg?react";
import { VStack } from "@/shared/ui/Stack";
import { NotificationList } from "@/entities/Notification";
import { Popover } from "@/shared/ui/Popups";
import { useDevice } from "@/shared/lib/hooks/useDevice/useDevice";
import { Drawer } from "@/shared/ui/Drawer";
import cls from "./NotificationButton.module.scss";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useDevice();

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <div onClick={onOpenDrawer}>
      <Icon Svg={Notification} fillIcon />
    </div>
  );

  if (isMobile) {
    return (
      <div>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList className={cls.mobile} />
        </Drawer>
      </div>
    );
  }

  return (
    <Popover
      className={classNames("", {}, [className])}
      trigger={trigger}
      direction={"bottom left"}
    >
      <VStack>
        <NotificationList className={cls.desktop} />
      </VStack>
    </Popover>
  );
});
