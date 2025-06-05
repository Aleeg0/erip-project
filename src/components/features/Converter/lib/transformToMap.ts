import type {CurrencyByDate} from "@/entities/Currencies/model";

export type CurrencyByDateMap = Record<number, CurrencyByDate>

export const transformToMap = (data: CurrencyByDate[]): CurrencyByDateMap =>
  data.reduce<CurrencyByDateMap>((acc, cur) => {
    acc[cur.id] = cur;
    return acc;
  }, {});