import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User/model/types/user";
import { LoginSchema } from "features/AuthByUsername";
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { ProfileSchema } from "entities/Profile";
import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router-dom";
import { ArticleDetailsSchema } from "entities/Article";
import { AddCommentFormSchema } from "features/addCommentForm";
import { ArticlesPageSchema } from "pages/ArticlesPage";
import { ScrollSaveSchema } from "features/scrollSave";
import { ArticleDetailsPageSchema } from "pages/ArticleDetailsPage";
import { rtkApi } from "shared/api/rtkApi";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  saveScroll: ScrollSaveSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
  // async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
