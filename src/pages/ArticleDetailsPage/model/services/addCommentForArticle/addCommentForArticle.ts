import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { ThunkConfig } from "app/providers/StoreProvider";
import { CommentType } from "entities/Comment";
import { getArticleDetailsData } from "entities/Article";
import { fetchCommentsByArticleId } from "../../services/fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<
  CommentType,
  string,
  ThunkConfig<string>
>("articleDetails/sendCommentForArticle", async (text, thunkAPI) => {
  const { extra, dispatch, rejectWithValue, getState } = thunkAPI;

  const userData = getUserAuthData(getState());
  const articleDetailsData = getArticleDetailsData(getState());

  if (!userData || !text || !articleDetailsData) {
    return rejectWithValue("no data");
  }

  try {
    const response = await extra.api.post<CommentType>(`/comments`, {
      articleId: articleDetailsData.id,
      userId: userData.id,
      text,
    });

    if (!response.data) {
      throw new Error();
    }

    dispatch(fetchCommentsByArticleId(articleDetailsData.id));

    return response.data;
  } catch (e) {
    return rejectWithValue("error");
  }
});
