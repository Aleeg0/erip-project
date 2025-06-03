import type {CurrenciesResponse, CurrencyTableData} from "@/entities/Currencies/model/types.ts";

const priorityOrder = ["USD", "EUR", "RUB", "UAH"];

export const responseTransformer = (response: CurrenciesResponse[]): CurrencyTableData[]  => {
  const data: CurrencyTableData[] = response.map((currency, index) => ({
    key: index,
    name: currency.Cur_Name,
    rate: currency.Cur_OfficialRate.toFixed(3),
    abbreviation: currency.Cur_Abbreviation,
    scale: currency.Cur_Scale
  } satisfies CurrencyTableData));


  const priorityData: CurrencyTableData[] = priorityOrder
    .map((abbreviation) => data.find((item) => item.abbreviation === abbreviation))
    .filter(Boolean) as CurrencyTableData[];

  const restData = data.filter((item) => !priorityData.includes(item));

  return [...priorityData, ...restData];
};