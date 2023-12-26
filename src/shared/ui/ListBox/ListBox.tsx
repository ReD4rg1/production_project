import { forwardRef, Fragment, memo, ReactNode } from "react";
import { Listbox as HListBox } from "@headlessui/react";
import cls from "./ListBox.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonProps } from "../Button/Button";
import { HStack } from "../Stack/HStack/HStack";

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

type DropdownDirection = "top" | "bottom";

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

const mapDirectionClass: Record<DropdownDirection, string> = {
  bottom: cls.optionsBottom,
  top: cls.optionsTop,
};

export const ListBox = memo((props: ListBoxProps) => {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = "bottom",
    label,
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

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
        className={classNames(cls.wrapper, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button as={"div"} className={cls.trigger}>
          <ListBoxButton disabled={readonly} children={value ?? defaultValue} />
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, optionsClasses)}
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
                  className={classNames(cls.item, {
                    [cls.active]: active,
                    [cls.disabled]: item.disabled,
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
