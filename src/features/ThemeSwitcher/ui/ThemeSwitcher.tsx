import { classNames } from "@/shared/lib/classNames/classNames";
import ThemeIcon from "@/shared/assets/icons/theme.svg?react";
import { Button, ButtonTheme } from "../../../shared/ui/Button/Button";
import { Icon } from "../../../shared/ui/Icon/Icon";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames("", {}, [className])}
      onClick={toggleTheme}
    >
      <Icon Svg={ThemeIcon} fillIcon />
    </Button>
  );
};
