import type {RouteItem, RouteValues} from "./type.ts";

export const routeMap: Record<RouteValues, RouteItem> = {
  home: {
    path: '/',
    title: "Курс НБРБ"
  },
  currencyDynamic: {
    path: "/currency-dynamic",
    title: "Динамика валюты",
  },
  converter: {
    path: "/converter",
      title: "Конвертер валют",
  },
};