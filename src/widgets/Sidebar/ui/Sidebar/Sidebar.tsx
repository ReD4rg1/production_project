import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid={"sidebar"}
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={classNames(cls.lang, {}, [])} />
      </div>
      <div className={cls.buttonToggle}>
        <Button
          data-testid={"sidebar-toggle"}
          onClick={onToggle}
          size={ButtonSize.M}
          theme={ButtonTheme.OUTLINE}
        >
          {collapsed ? ">" : "<"}
        </Button>
      </div>
    </div>
  );
};
