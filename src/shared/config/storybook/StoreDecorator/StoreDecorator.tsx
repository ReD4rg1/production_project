import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { loginReducer } from "@/features/AuthByUsername/testing";
import { ReducerList } from "../../../lib/components/DynamicModuleLoader/DynamicModuleLoader";
// eslint-disable-next-line d4rg1-fsd-plugin/layer-imports
import { articleDetailsReducer } from "@/entities/Article";
// eslint-disable-next-line d4rg1-fsd-plugin/layer-imports
import { addCommentFormReducer } from "@/features/addCommentForm";
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/testing";
import { profileReducer } from "@/features/editableProfileCard/testing";

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsPage: articleDetailsPageReducer,
  addCommentForm: addCommentFormReducer,
};

const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) =>
  (Story: Story) => (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <Story />
    </StoreProvider>
  );

export default StoreDecorator;
