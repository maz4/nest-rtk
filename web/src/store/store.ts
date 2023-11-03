import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({});

export const setupStore = () => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware: any) => [...getDefaultMiddleware()],
  });
};
