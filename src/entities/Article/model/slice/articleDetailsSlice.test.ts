import { ArticleDetailsSchema } from "../types/articleDetailsSchema";
import { fetchArticleById } from "../services/fetchArticleById";
import { articleMock } from "../../mocks/data";
import { articleDetailsReducer } from "../slice/articleDetailsSlice";

const data = articleMock;

describe("articleDetailsSlice", () => {
  test("fetch article by id pending", () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
    };

    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.pending
      )
    ).toEqual({
      isLoading: true,
      error: undefined,
    });
  });

  test("fetch article by id fulfilled", () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    };

    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.fulfilled(data, "", "")
      )
    ).toEqual({
      isLoading: false,
      data,
    });
  });

  test("fetch article by id rejected", () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    };

    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.rejected
      )
    ).toEqual({
      isLoading: false,
      error: undefined,
    });
  });
});
