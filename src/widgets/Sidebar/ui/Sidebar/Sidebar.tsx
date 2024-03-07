import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppLogo } from "@/shared/ui/redesigned/Applogo";
import { SidebarDeprecated } from "../SidebarDeprecated/SidebarDeprecated";
import { VStack } from "@/shared/ui/deprecated/Stack";
import { Icon } from "@/shared/ui/redesigned/Icon";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { LanguageSwitcher } from "@/shared/ui/deprecated/LanguageSwitcher";
import ArrowIcon from "@/shared/assets/icons/arrow-down.svg?react";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem item={item} collapsed={collapsed} key={item.path} />
      )),
    [collapsed, sidebarItemsList]
  );

  return (
    <ToggleFeatures
      feature={"isAppRedesigned"}
      on={
        <aside
          data-testid={"sidebar"}
          className={classNames(
            cls.SidebarRedesigned,
            { [cls.collapsedRedesigned]: collapsed },
            [className]
          )}
        >
          <AppLogo className={cls.appLogo} size={collapsed ? 30 : 50} />
          <VStack
            role="navigation"
            gap="8"
            className={cls.items}
            max
            align={"center"}
          >
            {itemsList}
          </VStack>
          <Icon
            data-testid="sidebar-toggle"
            onClick={onToggle}
            className={cls.collapseBtn}
            Svg={ArrowIcon}
            fillIcon
            clickable
          />
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LanguageSwitcher className={cls.lang} />
          </div>
        </aside>
      }
      off={<SidebarDeprecated />}
    />
  );
});
