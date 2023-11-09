import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./Select.module.scss";
import { ChangeEvent, memo, useMemo } from "react";

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly = false,
  } = props;
  const mods: Mods = {};

  const optionsList = useMemo(() => {
    return options?.map((option) => (
      <option className={cls.option} value={option.value} key={option.value}>
        {option.content}
      </option>
    ));
  }, [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.wrapper, mods, [className])}>
      {label && <span className={cls.label}>{label}</span>}
      <select
        disabled={readonly}
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
});
