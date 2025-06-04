import type {CurrencyByDate} from "@/entities/Currencies/model";

const priorityOrder = ["USD", "EUR", "RUB", "UAH"];

export interface CurrencyTableItem {
  key: number;
  name: string;
  rate: string;
  abbreviation: string;
  scale: number;
}

export const formTableItems = (response: CurrencyByDate[]): CurrencyTableItem[]  => {
  const data: CurrencyTableItem[] = response.map((currency, index) => ({
    key: index,
    name: currency.name,
    rate: currency.rate.toFixed(3),
    abbreviation: currency.abbreviation,
    scale: currency.scale
  } satisfies CurrencyTableItem));


  const priorityData: CurrencyTableItem[] = priorityOrder
    .map((abbreviation) => data.find((item) => item.abbreviation === abbreviation))
    .filter(Boolean) as CurrencyTableItem[];

  const restData = data.filter((item) => !priorityData.includes(item));

  return [...priorityData, ...restData];
};