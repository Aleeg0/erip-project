import dayjs from "dayjs";
import {useAppSelector} from "@/shared/redux";
import {currenciesApi, currenciesSlice} from "../../model";
import {today} from "@/shared/const.ts";
import styles from './styles.module.scss';
import Table from "./ui/Table.tsx";

const TableBlock = () => {
  const date = dayjs(useAppSelector(currenciesSlice.selectors.selectDate));
  const dateString = date.diff(today, 'day') === 0 ? "сегодня" : date.format("L");

  const {data, isLoading} = currenciesApi.useGetCurrenciesByDateQuery(date.format('YYYY-MM-DD'));

  return (
    <div className={styles.Table_container}>
      <div className={styles.Table_header}>
        <h1>
          Курсы валют НБ РБ на {dateString}
        </h1>
      </div>
      <div className={styles.Table_content}>
        <Table
          data={data}
          loading={isLoading}
        />
      </div>
    </div>
  );
};

export default TableBlock;