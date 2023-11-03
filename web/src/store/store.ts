import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { baseApi } from "web/store/api/baseApi";
const reducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});

const middleware = [baseApi.middleware];
export const setupStore = () => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware: any) => [
      ...middleware,
      ...getDefaultMiddleware(),
    ],
  });
};
