import {
  selectFilters,
  useGetCurrenciesQuery,
  useGetCurrencyDynamicQuery,
  type CurrencyDynamicRequest
} from "@/entities/CurrencyDynamic/model";
import {useAppSelector} from "@/shared/redux";
import styles from './styles.module.scss';
import {findCurrenciesCodes} from "@/entities/CurrencyDynamic/ui/InputBlock/lib/findCurrenciesCodes.ts";
import Chart from "./ui/Chart.tsx";
import LoadingChart from "@/entities/CurrencyDynamic/ui/Chart/ui/LoadingChart.tsx";
import EmptyChart from "@/entities/CurrencyDynamic/ui/Chart/ui/EmptyChart.tsx";

const ChartBlock = () => {
  const {date, parentID} = useAppSelector(selectFilters);
  const {data: currenciesMap, isLoading: isCurrenciesLoading } = useGetCurrenciesQuery();

  const currenciesList = currenciesMap?.[parentID] ?? [];
  const title = currenciesList[0]?.Cur_Name ?? "";

  const codes = findCurrenciesCodes(currenciesList, date.startDate, date.endDate);
  const {data: currencyDynamic} = useGetCurrencyDynamicQuery({
    date,
    codes
  } satisfies CurrencyDynamicRequest, {skip: isCurrenciesLoading});

  return (
    <div className={styles.Chart_container}>
      <div className={styles.Chart_header}>
        <h1>
          Динамика курса валюты ({title})
        </h1>
      </div>
      <div className={styles.Chart_content}>
        {currencyDynamic
          ? currencyDynamic.length > 0
            ? <Chart
              data={currencyDynamic}
            />
            : <EmptyChart/>
          : <LoadingChart />
        }
      </div>
    </div>
  );
};

export default ChartBlock;