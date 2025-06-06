import type {CurrencyByDate} from "@/entities/Currencies/model";

export const formSelectOptions = (data:  CurrencyByDate[]) => {
  return data.map((item) => ({
    value: item.id,
    label: item.abbreviation,
  }));
};