import { validateProfileData } from "./validateProfileData";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { ValidateProfileError } from "../../consts/validateProfileError";

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

describe("validateProfileData", () => {
  test("success validate", () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test("incorrect user data", () => {
    const result = validateProfileData({ ...data, first: "" });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("incorrect age", () => {
    const result = validateProfileData({ ...data, age: 0 });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test("incorrect city", () => {
    const result = validateProfileData({ ...data, city: "" });

    expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
  });

  test("incorrect all", () => {
    const result = validateProfileData({
      ...data,
      city: "",
      age: 0,
      first: "",
      lastname: "",
    });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_CITY,
    ]);
  });
});
