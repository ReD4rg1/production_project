import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { CommentType } from "entities/Comment";
import { StateSchema } from "app/providers/StoreProvider";
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";

const commentsAdapter = createEntityAdapter<CommentType>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);

const articleDetailsCommentsSlice = createSlice({
  name: "articleDetailsCommentsSlice",
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: ["1", "2"],
    entities: {
      "1": {
        id: "1",
        text: "first comment",
        articleId: "1",
        user: {
          id: "1",
          username: "JoJo",
        },
      },
      "2": {
        id: "2",
        text: "second comment",
        articleId: "1",
        user: {
          id: "1",
          username: "JoJo",
        },
      },
    },
  }),
  reducers: {},
  extraReducers: {},
});

export const { reducer: articleDetailsCommentsReducer } =
  articleDetailsCommentsSlice;
