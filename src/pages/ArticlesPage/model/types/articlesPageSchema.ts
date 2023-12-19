import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/Article";
import { SortOrder } from "shared/types";
import { ArticleSortField } from "entities/Article/model/types/article";

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  // filters
  view: ArticleView;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  // pagination
  page: number;
  limit?: number;
  hasMore: boolean;
  _inited: boolean;
}
