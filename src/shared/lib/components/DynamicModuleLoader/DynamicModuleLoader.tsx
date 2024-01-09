import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import {
  ReduxStoreWithManager,
  StateSchema,
} from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface DynamicModuleLoaderProps {
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
  children: ReactNode;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount = true } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers();

    Object.entries(reducers).forEach(([key, reducer]) => {
      const mounted = mountedReducers[key as StateSchemaKey];
      if (!mounted) {
        store.reducerManager.add(key as StateSchemaKey, reducer);
        dispatch({ type: `@@INIT ${key} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([key, reducer]) => {
          store.reducerManager.remove(key as StateSchemaKey);
          dispatch({ type: `@@DESTROY ${key} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return <>{children}</>;
};
