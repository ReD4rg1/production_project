export { ArticleDetailsPageSchema } from "./model/types";
export {
  getArticleDetailsCommentsError,
  getArticleDetailsCommentsIsLoading,
} from "./model/selectors/comments";
export { articleDetailsCommentsReducer } from "./model/slices/articleDetailsCommentsSlice";
export { articleDetailsRecommendationsReducer } from "./model/slices/articleDetailsRecommendationsSlice";
export { getArticleComments } from "./model/slices/articleDetailsCommentsSlice";
export { ArticleDetailsPageAsync as ArticleDetailsPage } from "./ui/ArticleDetailsPage/ArticleDetailsPage.async";
