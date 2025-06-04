import type {CurrenciesMap} from "@/entities/CurrencyDynamic/model";

export type CurrencySelectorItem = {
  value: string;
  label: string;
}

export const formSelectOptions = (currencyMap: CurrenciesMap): CurrencySelectorItem[] => {
  const options = Object.values(currencyMap).map((currenciesList) => {
    const firstCurrency = currenciesList[0];

    return {
      value: firstCurrency.Cur_ParentID.toString(),
      label: `${firstCurrency.Cur_Name} (${firstCurrency.Cur_Abbreviation})`
    } satisfies CurrencySelectorItem;
  });

  return options.sort((a, b) => a.label.localeCompare(b.label));
};