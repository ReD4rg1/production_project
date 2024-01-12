import { StateSchema } from "@/app/providers/StoreProvider";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import axios, { AxiosStatic } from "axios";

type ActionCreatorType<Return, Arg, RejectValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectValue }>;

jest.mock("axios");

const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Return, Arg, RejectValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
  actionCreator: ActionCreatorType<Return, Arg, RejectValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;
  navigate: jest.MockedFn<any>;

  constructor(
    actionCreator: ActionCreatorType<Return, Arg, RejectValue>,
    state?: DeepPartial<StateSchema>
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);

    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    return action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    });
  }
}
