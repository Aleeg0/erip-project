import type {Dayjs} from "dayjs";

export interface Currency {
  Cur_ID: number;
  Cur_ParentID: number;
  Cur_Abbreviation: string;
  Cur_Name: string;
  Cur_Name_Bel: string;
  Cur_Name_Eng: string;
  Cur_DateStart: Dayjs;
  Cur_DateEnd: Dayjs;
}

export type Code = string;

export type CurrenciesMap = Record<Code, Currency[]>;

export interface CurrencyDynamic {
  Cur_ID: number;
  Date: string;
  Cur_OfficialRate: number;
}

export interface DateCouple {
  startDate: string;
  endDate: string;
}

export interface CurrencyDynamicFilters {
  date: DateCouple;
  parentID: Code;
}

// RTK slice
export interface CurrencyDynamicState {
  filters: CurrencyDynamicFilters,
}

// RTK query
export interface CurrencyDynamicRequest {
  date: DateCouple;
  codes: Code[]
}