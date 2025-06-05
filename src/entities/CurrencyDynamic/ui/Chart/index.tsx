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
import {useEffect, useState} from "react";
import dayjs from "dayjs";
import {message} from "antd";

const MAX_DAYS = 365;

const ChartBlock = () => {
  const {date, parentID} = useAppSelector(selectFilters);
  const {data: currenciesMap, isLoading: isCurrenciesLoading } = useGetCurrenciesQuery();
  const [isRangeTooLarge, setIsRangeTooLarge] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const currenciesList = currenciesMap?.[parentID] ?? [];
  const title = currenciesList[0]?.Cur_Name ?? "";

  const codes = findCurrenciesCodes(currenciesList, date.startDate, date.endDate);
  const {data: currencyDynamic, isLoading: isDynamicLoading} = useGetCurrencyDynamicQuery({
    date,
    codes
  } satisfies CurrencyDynamicRequest, {skip: isCurrenciesLoading || isRangeTooLarge});

  useEffect(() => {
    if (dayjs(date.endDate).diff(dayjs(date.startDate), 'day') <= MAX_DAYS) {
      setIsRangeTooLarge(false);
    }
    else {
      messageApi.warning({
        type: 'warning',
        content: `Диапазон дат не должен превышать ${MAX_DAYS} ней`,
        duration: 4,
      });
      setIsRangeTooLarge(true);
    }
  }, [date.endDate, date.startDate, messageApi]);

  return (
    <div className={styles.Chart_container}>
      {contextHolder}
      <div className={styles.Chart_header}>
        <h1>
          Динамика курса валюты ({title})
        </h1>
      </div>
      <div className={styles.Chart_content}>
        {!isDynamicLoading
          ? currencyDynamic && currencyDynamic.length > 0
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