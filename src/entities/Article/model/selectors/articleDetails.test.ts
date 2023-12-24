import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import {
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  getArticleDetailsError,
} from "./articleDetails";
import { Article } from "../types/article";

import { articleMock } from "../../mocks/data";

const data: Article = articleMock;

describe("articleDetails", () => {
  test("getArticleDetailsData", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { data },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });

  test("getArticleDetailsIsLoading", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { isLoading: false },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });

  test("getArticleDetailsError", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { error: "error" },
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual("error");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
});
