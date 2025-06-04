export const getCountryFlagPath = (currencyCode: string): string => {
  const code = currencyCountryMap[currencyCode];
  return code ? `https://flagcdn.com/${code}.svg` : "";
};

const currencyCountryMap: Record<string, string> = {
  AED: "ae",
  AMD: "am",
  AUD: "au",
  BGN: "bg",
  BRL: "br",
  CAD: "ca",
  CHF: "ch",
  CNY: "cn",
  CZK: "cz",
  DKK: "dk",
  EUR: "eu",
  GBP: "gb",
  INR: "in",
  IRR: "ir",
  ISK: "is",
  JPY: "jp",
  KGS: "kg",
  KWD: "kw",
  KZT: "kz",
  MDL: "md",
  NOK: "no",
  NZD: "nz",
  PLN: "pl",
  RUB: "ru",
  SEK: "se",
  SGD: "sg",
  TRY: "tr",
  UAH: "ua",
  USD: "us",
  VND: "vn",
};