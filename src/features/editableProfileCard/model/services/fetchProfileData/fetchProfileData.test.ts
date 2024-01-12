import { fetchProfileData } from "./fetchProfileData";
import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
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

describe("fetchProfileData", () => {
  test("success fetch", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error fetch", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual("error");
  });
});
