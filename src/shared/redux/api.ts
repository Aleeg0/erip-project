import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://api.nbrb.by/exrates';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: () => ({})
});