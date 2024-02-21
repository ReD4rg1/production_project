import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Popover.module.scss";
import popupCls from "../../styles/popup.module.scss";
import { Popover as HPopover } from "@headlessui/react";
import { DropdownDirection } from "@/shared/types/ui";
import { ReactNode } from "react";
import { mapDirectionClass } from "../../styles/consts";

interface PopoverProps {
  className?: string;
  direction?: DropdownDirection;
  trigger: ReactNode;
  children: ReactNode;
}
/**
 * @deprecated
 * */
export const Popover = (props: PopoverProps) => {
  const { className, direction = "bottom right", trigger, children } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <HPopover className={classNames(cls.wrapper, {}, [className])}>
      <HPopover.Button className={popupCls.btn}>{trigger}</HPopover.Button>
      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};
