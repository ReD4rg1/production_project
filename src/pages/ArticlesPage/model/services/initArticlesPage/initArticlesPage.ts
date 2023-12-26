import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlesPageInited } from "../../selectors/articles";
import { articlePageActions } from "../../slices/articlePageSlice";
import { fetchArticlesList } from "../../services/fetchArticlesList/fetchArticlesList";
import { SortOrder } from "shared/types";
import { ArticleSortField, ArticleType } from "entities/Article";

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>("articlesPage/initArticlesPage", async (searchParams, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;
  const _inited = getArticlesPageInited(getState());

  if (!_inited) {
    const orderFromURL = searchParams.get("order");
    const sortFromURL = searchParams.get("sort");
    const searchFromURL = searchParams.get("search");
    const pageFromURL = searchParams.get("page");
    const typeFromURL = searchParams.get("type");

    if (orderFromURL) {
      dispatch(articlePageActions.setOrder(orderFromURL as SortOrder));
    }
    if (sortFromURL) {
      dispatch(articlePageActions.setSort(sortFromURL as ArticleSortField));
    }
    if (searchFromURL) {
      dispatch(articlePageActions.setSearch(searchFromURL));
    }
    // Замечена бага с загрузкой, если долистать ленту до конца и обновить страницу,
    // то в адресную строку вставляется URL с последней страницей,это в свою очередь
    // ведёт за собой инициализацию стейта с выбранной страницей и флаг hasMore остается false
    if (pageFromURL) {
      dispatch(articlePageActions.setPage(Number(pageFromURL)));
    }
    if (typeFromURL) {
      dispatch(articlePageActions.setType(typeFromURL as ArticleType));
    }

    dispatch(articlePageActions.initState());
    dispatch(fetchArticlesList({}));
  }
});
