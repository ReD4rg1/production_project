import { counterReducer, counterActions } from "./counterSlice";
import { CounterSchema } from "../types/counterSchema";

describe("counterSlice", () => {
  test("", () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.decremented())).toEqual({
      value: 9,
    });
  });
});
