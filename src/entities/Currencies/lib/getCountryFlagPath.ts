import {currencyCountryMap} from "@/entities/Currencies/lib/const.ts";

export const getCountryFlagPath = (currencyCode: string): string => {
  const code = currencyCountryMap[currencyCode];
  return code ? `https://flagcdn.com/${code}.svg` : "";
};