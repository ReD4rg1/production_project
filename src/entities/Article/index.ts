export { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";
export { ArticleDetails } from "./ui/ArticleDetails/ArticleDetails";
export type { Article } from "./model/types/article";
export {
  articleDetailsReducer,
  articleDetailsActions,
} from "./model/slice/articleDetailsSlice";
export type { ArticleDetailsSchema } from "./model/types/articleDetailsSchema";
