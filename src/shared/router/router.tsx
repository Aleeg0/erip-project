import {createBrowserRouter} from "react-router";
import {Layout, HomePage, CurrencyDynamicPage, ConverterPage} from "@/pages";
import {routeMap} from "@/shared/router/const.ts";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: routeMap['currencyDynamic'].path, Component: CurrencyDynamicPage},
      { path: routeMap['converter'].path, Component: ConverterPage}
    ],
  }
]);