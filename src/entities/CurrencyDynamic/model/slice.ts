import type {CurrencyDynamicFilters, CurrencyDynamicState} from "./type.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {monthAgoStr, todayStr} from "@/shared/const.ts";

const initialState: CurrencyDynamicState = {
  filters : {
    date: {
      startDate: monthAgoStr,
      endDate: todayStr,
    },
    parentID: "145"
  }
};

const currencyDynamicSlice = createSlice({
  name: "currencies-dynamic",
  initialState,
  selectors: {
    selectFilters: (state) => state.filters,
  },
  reducers: {
    setFilters: (state, action: PayloadAction<CurrencyDynamicFilters>) => {
      state.filters =  action.payload;
    }
  }
});

export const {setFilters} = currencyDynamicSlice.actions;
export const {selectFilters} = currencyDynamicSlice.selectors;
export default currencyDynamicSlice;