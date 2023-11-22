export {
  getArticleDetailsCommentsError,
  getArticleDetailsCommentsIsLoading,
} from "./model/selectors/comments";
export { articleDetailsCommentsReducer } from "./model/slices/articleDetailsCommentsSlice";
export { getArticleComments } from "./model/slices/articleDetailsCommentsSlice";
export { ArticleDetailsPageAsync as ArticleDetailsPage } from "./ui/ArticleDetailsPage/ArticleDetailsPage.async";
export { ArticleDetailsCommentsSchema } from "./model/types/ArticleDetailsCommentsSchema";
