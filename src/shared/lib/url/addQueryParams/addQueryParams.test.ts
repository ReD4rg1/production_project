import { getQueryParams } from "./addQueryParams";

describe("addQueryParams", () => {
  test("test with one param", () => {
    const params = getQueryParams({
      test: "value",
    });
    expect(params).toEqual("?test=value");
  });

  test("test with multiple param", () => {
    const params = getQueryParams({
      test: "value",
      search: "text",
    });
    expect(params).toEqual("?test=value&search=text");
  });

  test("test with undefined", () => {
    const params = getQueryParams({});
    expect(params).toEqual("?");
  });
});
