import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { SecondPage } from "pages/SecondPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";
import { ArticlesPage } from "pages/ArticlesPage";
import { ArticleDetailsPage } from "pages/ArticleDetailsPage";
import { ArticleEditPage } from "pages/ArticleEditPage";
import { AdminPanelPage } from "pages/AdminPanelPage";
import { UserRole } from "entities/User";
import { ForbiddenPage } from "pages/ForbiddenPage";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};

export enum AppRoutes {
  MAIN = "main",
  ADMIN_PANEL = "admin_panel",
  SECOND = "second",
  PROFILE = "profile",
  ARTICLES = "articles",
  ARTICLE_DETAILS = "articleDetails",
  ARTICLE_CREATE = "articleCreate",
  ARTICLE_EDIT = "articleEdit",
  NOT_FOUND = "notFound",
  FORBIDDEN = "forbidden",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ADMIN_PANEL]: "/admin",
  [AppRoutes.SECOND]: "/second",
  [AppRoutes.PROFILE]: "/profile/", // + id
  [AppRoutes.ARTICLES]: "/articles",
  [AppRoutes.ARTICLE_DETAILS]: "/articles/", // + id
  [AppRoutes.ARTICLE_CREATE]: "/articles/new",
  [AppRoutes.ARTICLE_EDIT]: "/articles/:id/edit",
  [AppRoutes.NOT_FOUND]: "*",
  [AppRoutes.FORBIDDEN]: "/forbidden",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: RoutePath.admin_panel,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
  [AppRoutes.SECOND]: {
    path: RoutePath.second,
    element: <SecondPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
  [AppRoutes.FORBIDDEN]: {
    path: RoutePath.forbidden,
    element: <ForbiddenPage />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath.articleDetails}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: `${RoutePath.articleCreate}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: `${RoutePath.articleEdit}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
};
