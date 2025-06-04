import type {CurrenciesResponse, CurrencyByDate} from "./types.ts";

export const transformCurrenciesByDateResponse = (response: CurrenciesResponse[]): CurrencyByDate[] =>
  response.map(item => ({
    id: item.Cur_ID,
    abbreviation: item.Cur_Abbreviation,
    name: item.Cur_Name,
    scale: item.Cur_Scale,
    rate: item.Cur_OfficialRate
  }) as CurrencyByDate);