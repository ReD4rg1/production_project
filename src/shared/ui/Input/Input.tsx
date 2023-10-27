import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";
import React, {
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  inputStyle?: InputStyle;
  autofocus?: boolean;
}

export enum InputStyle {
  CONSOLE = "consoleInput",
  NORMAL = "normalInput",
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    inputStyle = InputStyle.NORMAL,
    autofocus,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      {inputStyle === InputStyle.CONSOLE && (
        <div className={cls.placeholder}>{`${
          placeholder ? placeholder : ""
        }>`}</div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          className={cls[inputStyle]}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          placeholder={inputStyle !== InputStyle.CONSOLE && placeholder}
          {...otherProps}
        />
        {inputStyle === InputStyle.CONSOLE && isFocused && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 9}px` }}
          />
        )}
      </div>
    </div>
  );
});
