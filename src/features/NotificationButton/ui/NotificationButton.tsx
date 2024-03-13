import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, useCallback, useState } from "react";
import { Icon } from "@/shared/ui/redesigned/Icon";
import { Icon as IconDeprecated } from "@/shared/ui/deprecated/Icon";
import Notification from "@/shared/assets/icons/notification.svg?react";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { NotificationList } from "@/entities/Notification";
import { Popover as PopoverDeprecated } from "@/shared/ui/deprecated/Popups";
import { Popover } from "@/shared/ui/redesigned/Popups";
import { useDevice } from "@/shared/lib/hooks/useDevice/useDevice";
import { Drawer } from "@/shared/ui/deprecated/Drawer";
import cls from "./NotificationButton.module.scss";
import { ToggleFeatures } from "@/shared/lib/features";
import { Button } from "@/shared/ui/redesigned/Button";

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
    <ToggleFeatures
      feature={"isAppRedesigned"}
      on={<Icon Svg={Notification} fillIcon clickable onClick={onOpenDrawer} />}
      off={
        <Button onClick={onOpenDrawer}>
          <IconDeprecated width={30} height={30} Svg={Notification} fillIcon />
        </Button>
      }
    />
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
    <ToggleFeatures
      feature={"isAppRedesigned"}
      on={
        <Popover
          className={classNames("", {}, [className])}
          trigger={trigger}
          direction={"bottom left"}
        >
          <VStack>
            <NotificationList className={cls.desktop} />
          </VStack>
        </Popover>
      }
      off={
        <PopoverDeprecated
          className={classNames("", {}, [className])}
          trigger={trigger}
          direction={"bottom left"}
        >
          <VStack>
            <NotificationList className={cls.desktop} />
          </VStack>
        </PopoverDeprecated>
      }
    />
  );
});
