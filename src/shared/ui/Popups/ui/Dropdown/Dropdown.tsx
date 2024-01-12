import { classNames } from "@/shared/lib/classNames/classNames";
import popupCls from "../../styles/popup.module.scss";
import { Fragment, memo, ReactNode } from "react";
import { Menu } from "@headlessui/react";
import { AppLink } from "../../../AppLink/AppLink";
import { DropdownDirection } from "@/shared/types/ui";
import { mapDirectionClass } from "../../styles/consts";

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  direction?: DropdownDirection;
  trigger: ReactNode;
}

export const Dropdown = memo((props: DropdownProps) => {
  const { className, trigger, items, direction = "bottom right" } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as="div" className={classNames(popupCls.wrapper, {}, [className])}>
      <Menu.Button className={popupCls.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(popupCls.menu, {}, menuClasses)}>
        {items.map((item, key) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(popupCls.item, {
                [popupCls.active]: active,
              })}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
                key={key}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} disabled={item.disabled} key={key}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
});
