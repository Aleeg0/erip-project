import {Space, Table as AntdTable, type TableProps} from "antd";
import dayjs from "dayjs";
import {useAppSelector} from "@/shared/redux";
import type {CurrencyTableData} from "../model/types.ts";
import {currenciesApi, currenciesSlice} from "../model";
import {today} from "../lib/const.ts";
import {getCountryFlagPath} from "../lib/getCountryFlagPath.ts";
import styles from './styles.module.scss';

const columns: TableProps<CurrencyTableData>['columns'] = [
  {
    title: 'Валюта',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Курс',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: 'Код',
    dataIndex: 'abbreviation',
    key: 'abbreviation',
    render: (_, record) => (
      <Space size="small">
        <img
          src={getCountryFlagPath(record.abbreviation)}
          alt=""
          className={styles.Table_flagIcon}
        />
        {record.abbreviation}
      </Space>
    )
  },
  {
    title: 'Единиц',
    key: 'scale',
    dataIndex: 'scale'
  },
];

const Table = () => {
  const date = dayjs(useAppSelector(currenciesSlice.selectors.selectDate));
  const dateString = date.diff(today, 'day') === 0 ? "сегодня" : date.format("L");

  const {data, isLoading} = currenciesApi.useGetCurrenciesQuery(date.format('YYYY-MM-DD'));

  return (
    <div className={styles.Table_container}>
      <div className={styles.Table_header}>
        <h1>
          Курсы валют НБ РБ на {dateString}
        </h1>
      </div>
      <div className={styles.Table_content}>
        <AntdTable

          loading={isLoading}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default Table;