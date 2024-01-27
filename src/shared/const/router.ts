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

export const getRouteMain = () => `/`;
export const getRouteSecond = () => `/second`;
export const getRouteAdminPanel = () => `/admin`;
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => `/articles`;
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => `/articles/new`;
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteNotFound = () => `*`;
export const getRouteForbidden = () => `/forbidden`;
