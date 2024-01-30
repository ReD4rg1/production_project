import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import { NavbarItemType } from "../types/navbar";
import MainIcon from "@/shared/assets/icons/home.svg?react";
import SquareListIcon from "@/shared/assets/icons/square-list.svg?react";
import ProfileIcon from "@/shared/assets/icons/profile.svg?react";
import ArticlesIcon from "@/shared/assets/icons/posts.svg?react";
import {
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
  getRouteSecond,
} from "@/shared/const/router";

export const getNavbarSelectors = createSelector(
  getUserAuthData,
  (userData) => {
    const navbarItemsList: NavbarItemType[] = [
      { path: getRouteMain(), text: "Главная", Icon: MainIcon },
      { path: getRouteSecond(), text: "Второстепенная", Icon: SquareListIcon },
    ];

    if (userData) {
      navbarItemsList.push(
        {
          path: getRouteProfile(userData.id),
          text: "Страница профиля",
          authOnly: true,
          Icon: ProfileIcon,
        },
        {
          path: getRouteArticles(),
          text: "Страница постов",
          authOnly: true,
          Icon: ArticlesIcon,
        }
      );
    }

    return navbarItemsList;
  }
);
