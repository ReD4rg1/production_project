import { forwardRef, Fragment, memo, ReactNode } from "react";
import { Listbox as HListBox } from "@headlessui/react";
import popupCls from "../../styles/popup.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonProps } from "../../../Button/Button";
import { HStack } from "../../../Stack/HStack/HStack";
import { mapDirectionClass } from "../../styles/consts";
import { DropdownDirection } from "@/shared/types/ui";

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}
/**
 * @deprecated
 * */
export const ListBox = memo((props: ListBoxProps) => {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = "bottom right",
    label,
  } = props;

  const menuClasses = [mapDirectionClass[direction]];

  const ListBoxButton = forwardRef<HTMLDivElement, ButtonProps>(
    (props, ref) => (
      <div ref={ref}>
        <Button {...props} />
      </div>
    )
  );

  return (
    <HStack gap="4">
      {label && <span>{`${label}>`}</span>}
      <HListBox
        disabled={readonly}
        as="div"
        className={classNames(popupCls.wrapper, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button as={"div"} className={popupCls.btn}>
          <ListBoxButton disabled={readonly} children={value ?? defaultValue} />
        </HListBox.Button>
        <HListBox.Options
          className={classNames(popupCls.menu, {}, menuClasses)}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(popupCls.item, {
                    [popupCls.active]: active,
                    [popupCls.disabled]: item.disabled,
                  })}
                >
                  {selected && "!!!"}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
});
