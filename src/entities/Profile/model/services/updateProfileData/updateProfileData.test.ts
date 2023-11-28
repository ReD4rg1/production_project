import { updateProfileData } from "./updateProfileData";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { ValidateProfileError } from "entities/Profile";

const data = {
  id: "1",
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

describe("updateProfileData", () => {
  test("success update", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error update", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test("incorrect user data", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, first: "" },
      },
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
