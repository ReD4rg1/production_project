import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import { NavbarItemType } from "../types/navbar";
import MainIcon from "@/shared/assets/icons/home.svg?react";
import SquareListIcon from "@/shared/assets/icons/square-list.svg?react";
import ProfileIcon from "@/shared/assets/icons/profile.svg?react";
import ArticlesIcon from "@/shared/assets/icons/posts.svg?react";

export const getNavbarSelectors = createSelector(
  getUserAuthData,
  (userData) => {
    const navbarItemsList: NavbarItemType[] = [
      { path: RoutePath.main, text: "Главная", Icon: MainIcon },
      { path: RoutePath.second, text: "Второстепенная", Icon: SquareListIcon },
    ];

    if (userData) {
      navbarItemsList.push(
        {
          path: RoutePath.profile + userData?.id,
          text: "Страница профиля",
          authOnly: true,
          Icon: ProfileIcon,
        },
        {
          path: RoutePath.articles,
          text: "Страница постов",
          authOnly: true,
          Icon: ArticlesIcon,
        }
      );
    }

    return navbarItemsList;
  }
);
