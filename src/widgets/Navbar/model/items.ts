import React from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export interface NavbarItemType {
  path: string;
  text: string;
  Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const NavbarItemsList: NavbarItemType[] = [
  { path: RoutePath.main, text: "Главная" },
  { path: RoutePath.second, text: "Второстепенная" },
  { path: RoutePath.profile, text: "Страница профиля" },
];
