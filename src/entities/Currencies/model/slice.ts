import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {currencyState} from "./types.ts";
import {today} from "../lib/const.ts";

const initialState: currencyState = {
  date: today.format("YYYY-MM-DD"),
};

const currenciesSlice = createSlice({
  name: "currency",
  initialState,
  selectors: {
    selectDate: (state) => state.date,
  },
  reducers: {
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    }
  }
});

export default currenciesSlice;