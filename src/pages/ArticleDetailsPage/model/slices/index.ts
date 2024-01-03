import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageSchema } from "../types/index";
import { articleDetailsRecommendationsReducer } from "../slices/articleDetailsRecommendationsSlice";
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from "../slices/articleDetailsCommentsSlice";

export const articleDetailsPageReducer =
  combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
  });

export { getArticleComments };
