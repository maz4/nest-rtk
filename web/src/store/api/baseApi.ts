import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApiUrl = "http://localhost:4000";
// initialize an empty api service that we'll inject endpoints into later as needed
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseApiUrl,
    prepareHeaders: async (headers) => {
      return headers;
    },
    credentials: "include",
  }),
  endpoints: () => ({}),
});
