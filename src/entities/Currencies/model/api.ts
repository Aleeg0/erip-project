import {api} from "@/shared/redux/api";
import type {CurrencyByDate} from "./types";
import {transformCurrenciesByDateResponse} from "./lib.ts";

const currenciesApi = api.injectEndpoints({
  endpoints: (create) => ({
    getCurrenciesByDate: create.query<CurrencyByDate[], string>({
      query: (date) => ({
        url: '/rates',
        params: {
          periodicity: 0,
          ondate: date,
        }
      }),
      transformResponse: transformCurrenciesByDateResponse
    })
  }),
  overrideExisting: true,
});

export const {useGetCurrenciesByDateQuery} = currenciesApi;
export default currenciesApi;