import { profileActions, profileReducer } from "./profileSlice";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import {
  ProfileSchema,
  ValidateProfileError,
} from "../types/editableProfileCardSchema";

const data = {
  first: "Kirill",
  lastname: "Musenov",
  age: 21,
  currency: Currency.KZT,
  country: Country.Kazakhstan,
  city: "Ust-Kamenogorsk",
  username: "admin",
  avatar:
    "https://as2.ftcdn.net/v2/jpg/05/62/50/67/1000_F_562506773_fHfLF6aioKButDkhOeXJcnNdwxl67WC1.jpg",
};

describe("profileSlice", () => {
  test("set readonly", () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };

    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({ readonly: true });
  });

  test("cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = {
      data: data,
      form: { ...data, age: 0 },
      readonly: false,
      validateError: [ValidateProfileError.INCORRECT_AGE],
    };

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({
      data: data,
      form: data,
      readonly: true,
      validateError: undefined,
    });
  });

  test("update profile", () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: "123" },
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: "1" })
      )
    ).toEqual({ form: { username: "1" } });
  });

  test("update profile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR],
    };

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({
      isLoading: true,
      validateError: undefined,
    });
  });

  test("update profile service fulfilled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      readonly: false,
      validateError: undefined,
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, "")
      )
    ).toEqual({
      isLoading: false,
      readonly: true,
      validateError: undefined,
      data,
      form: data,
    });
  });

  test("update profile service rejected", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      readonly: false,
      validateError: undefined,
    };

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.rejected)
    ).toEqual({
      isLoading: false,
      readonly: false,
      validateError: undefined,
    });
  });
});
