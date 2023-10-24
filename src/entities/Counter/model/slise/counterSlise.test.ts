import { counterReducer, CounterSchema } from "entities/Counter";
import { counterActions } from "entities/Counter/model/slise/counterSlise";

describe("counterSlise", () => {
  test("", () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.decremented())).toEqual({
      value: 9,
    });
  });
});
