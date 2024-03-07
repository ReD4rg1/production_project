import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Code.module.scss";
import { memo, useCallback } from "react";
import { Button } from "../../redesigned/Button/Button";
import { Icon } from "../../redesigned/Icon/Icon";
import CopyIcon from "@/shared/assets/icons/copy.svg?react";

interface CodeProps {
  className?: string;
  text: string;
}
/**
 * @deprecated
 * */
export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.wrapper, {}, [className])}>
      <Button onClick={onCopy} variant={"clear"} className={cls.copyBtn}>
        <Icon Svg={CopyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
