import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import { moviesAPI } from "../services/moviesAPI";

export const store = configureStore({
  reducer: {
    [moviesAPI.reducerPath]: moviesAPI.reducer,
  },
});
