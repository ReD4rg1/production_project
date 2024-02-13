import { classNames } from "@/shared/lib/classNames/classNames";
import ThemeIcon from "@/shared/assets/icons/theme.svg?react";
import { Button, ButtonTheme } from "../../../shared/ui/Button/Button";
import { Icon } from "../../../shared/ui/Icon/Icon";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { saveJsonSettings } from "@/entities/User";
import { useCallback } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames("", {}, [className])}
      onClick={onToggleHandler}
    >
      <Icon Svg={ThemeIcon} fillIcon />
    </Button>
  );
};
