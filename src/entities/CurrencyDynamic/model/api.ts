import dayjs from "dayjs";
import {api} from "@/shared/redux";
import type {CurrenciesMap, CurrencyDynamic, CurrencyDynamicRequest} from "./type.ts";
import {transformGetCurrenciesResponse} from "./lib.ts";


const currencyDynamicApi = api.injectEndpoints({
  endpoints: (create) => ({
    getCurrencies: create.query<CurrenciesMap, void>({
      query: () => ({
          url: `/currencies`
      }),
      transformResponse: transformGetCurrenciesResponse
    }),
    getCurrencyDynamic: create.query<CurrencyDynamic[], CurrencyDynamicRequest>({
      queryFn: async ({date, codes}, _queryApi,  _extraOptions, baseQuery) => {
        const responses = await Promise.all(
          codes.map((code) => baseQuery({
            url: `/rates/dynamics/${code}`,
            params: {
              startdate: date.startDate,
              enddate: date.endDate
            }
          }))
        );

        // if some requests errors
        const fetchError = responses.find((res) => !!res.error);
        if (fetchError)
          return {error: fetchError.error};

        const data = responses
          .flatMap(r => r.data as CurrencyDynamic)
          .map((item) => ({
            ...item,
            Date: dayjs(item.Date).format('L'),
          }) satisfies CurrencyDynamic);

        return {data} ;

      }
    })
  }),
  overrideExisting: true,
});

export const {useGetCurrencyDynamicQuery, useGetCurrenciesQuery} = currencyDynamicApi;
export default currencyDynamicApi;
