import {configureStore} from "@reduxjs/toolkit";
import {currenciesSlice} from "@/entities/Currencies/model";
import {api} from "./api.ts";
import {useDispatch, useSelector} from "react-redux";

export const store = configureStore({
  reducer: {
    [currenciesSlice.name]: currenciesSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

type AppState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();