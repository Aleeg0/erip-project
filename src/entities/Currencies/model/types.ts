export interface currencyState {
  date: string;
}

export interface CurrencyTableData {
  key: number;
  name: string;
  rate: string;
  abbreviation: string;
  scale: number;
}

export interface CurrenciesResponse {
  Cur_ID: number;
  Cur_Abbreviation: string;
  Cur_Scale: number;
  Cur_Name: string;
  Cur_OfficialRate: number;
}