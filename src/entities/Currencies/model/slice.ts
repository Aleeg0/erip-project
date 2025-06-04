import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {currencyState} from "./types.ts";
import {todayStr} from "@/shared/const.ts";

const initialState: currencyState = {
  date: todayStr,
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