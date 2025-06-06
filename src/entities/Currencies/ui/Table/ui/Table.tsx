import type {FC} from "react";
import {Space, Table as AntdTable, type TableProps} from "antd";
import type {CurrencyByDate} from "@/entities/Currencies/model";
import {type CurrencyTableItem, formTableItems} from "../lib/formTableItems.ts";
import {getCountryFlagPath} from "../lib/getCountryFlagPath.ts";
import styles from "../styles.module.scss";

const columns: TableProps<CurrencyTableItem>['columns'] = [
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

type Props = {
  data: CurrencyByDate[] | undefined;
  loading: boolean;
}

const Table: FC<Props> = ({data, loading}) => {
  const dataSource = data ? formTableItems(data) : [];

  return (
    <AntdTable
      loading={loading}
      columns={columns}
      dataSource={dataSource}
      pagination={false}
    />
  );
};

export default Table;