import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";

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

describe("getProfileData", () => {
  test("getProfileData", () => {
    const state: DeepPartial<StateSchema> = { profile: { data: data } };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
