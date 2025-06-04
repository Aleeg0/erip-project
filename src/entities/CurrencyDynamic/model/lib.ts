import type {CurrenciesMap, Currency} from "./type.ts";

export const transformGetCurrenciesResponse = (response: Currency[]): CurrenciesMap => {
  const currencies: CurrenciesMap = {};

  for (const currency of response) {
    const parentID = currency.Cur_ParentID;
    if (!currencies[parentID]) {
      currencies[parentID] = [];
    }
    currencies[parentID].push(currency);
  }

  return currencies;
};