export interface currencyState {
  date: string;
}

export interface CurrenciesResponse {
  Cur_ID: number;
  Cur_Abbreviation: string;
  Cur_Scale: number;
  Cur_Name: string;
  Cur_OfficialRate: number;
}

export interface CurrencyByDate {
  id: number;
  abbreviation: string;
  scale: number;
  name: string;
  rate: number;
}