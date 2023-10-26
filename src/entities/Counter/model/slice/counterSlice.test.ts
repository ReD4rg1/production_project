import { counterReducer, counterActions } from "./counterSlice";
import { CounterSchema } from "../types/counterSchema";

describe("counterSlice", () => {
  test("Decrement", () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.decremented())).toEqual({
      value: 9,
    });
  });

  test("Increment", () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.incremented())).toEqual({
      value: 11,
    });
  });

  test("Should work with empty state", () => {
    expect(counterReducer(undefined, counterActions.incremented())).toEqual({
      value: 1,
    });
  });
});
