import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { CommentType } from "entities/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<
  CommentType[],
  string,
  ThunkConfig<string>
>(
  "articleDetailsComments/fetchCommentsByArticleId",
  async (commentId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<CommentType[]>(`/comments`, {
        params: {
          commentId,
          _expand: "user",
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue("error");
    }
  }
);
