import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import MainIcon from "@/shared/assets/icons/home.svg?react";
import SquareListIcon from "@/shared/assets/icons/square-list.svg?react";
import ProfileIcon from "@/shared/assets/icons/profile.svg?react";
import ArticlesIcon from "@/shared/assets/icons/posts.svg?react";
import { SidebarItemType } from "../types/sidebar";
import {
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
  getRouteSecond,
} from "@/shared/const/router";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: MainIcon,
      text: "Главная",
    },
    {
      path: getRouteSecond(),
      Icon: SquareListIcon,
      text: "О сайте",
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: ProfileIcon,
        text: "Профиль",
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: ArticlesIcon,
        text: "Статьи",
        authOnly: true,
      }
    );
  }

  return sidebarItemsList;
});
