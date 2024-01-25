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
