import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { NavbarItemType } from "../types/navbar";

export const getNavbarSelectors = createSelector(
  getUserAuthData,
  (userData) => {
    const navbarItemsList: NavbarItemType[] = [
      { path: RoutePath.main, text: "Главная" },
      { path: RoutePath.second, text: "Второстепенная" },
    ];

    if (userData) {
      navbarItemsList.push(
        {
          path: RoutePath.profile + userData?.id,
          text: "Страница профиля",
          authOnly: true,
        },
        { path: RoutePath.articles, text: "Страница постов", authOnly: true }
      );
    }

    return navbarItemsList;
  }
);
