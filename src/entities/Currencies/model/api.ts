import {api} from "@/shared/redux/api";
import type {CurrencyTableData} from "./types";
import {responseTransformer} from "@/entities/Currencies/lib/responseTransformer.ts";

const currenciesApi = api.injectEndpoints({
  endpoints: (create) => ({
    getCurrenciesByDate: create.query<CurrencyTableData[], string>({
      query: (date) => ({
        url: '/rates',
        params: {
          periodicity: 0,
          ondate: date,
        }
      }),
      transformResponse: responseTransformer

    })
  }),
  overrideExisting: true,
});

export default currenciesApi;