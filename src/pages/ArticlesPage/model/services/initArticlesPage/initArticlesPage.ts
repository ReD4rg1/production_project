import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlesPageInited } from "../../selectors/articles";
import { articlePageActions } from "../../slices/articlePageSlice";
import { fetchArticlesList } from "../../services/fetchArticlesList/fetchArticlesList";

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("articlesPage/initArticlesPage", async (_, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;
  const _inited = getArticlesPageInited(getState());

  if (!_inited) {
    dispatch(articlePageActions.initState());
    dispatch(fetchArticlesList({ page: 1 }));
  }
});
