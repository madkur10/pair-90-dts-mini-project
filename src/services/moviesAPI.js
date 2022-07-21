import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesAPI = createApi({
  reducerPath: "moviesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/movie",
  }),
  endpoints: (builder) => ({
    generalMovie: builder.query({
      query: () => "/550?api_key=2dd5257e492f59c8f1f807a5dc299773",
    }),
  }),
});

export const { useGeneralMovieQuery } = moviesAPI;
