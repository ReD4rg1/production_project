import { Button } from "shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "entities/Counter/model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.incremented());
  };

  const decrement = () => {
    dispatch(counterActions.decremented());
  };

  return (
    <div>
      <h1>{`value = ${counterValue}`}</h1>
      <Button onClick={increment}>{"increment"}</Button>
      <Button onClick={decrement}>{"decrement"}</Button>
    </div>
  );
};
