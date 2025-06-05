import {Select} from "antd";
import type {FC} from "react";
import type {CurrencyByDate} from "@/entities/Currencies/model";
import {formSelectOptions} from "../lib/formSelectOptions.ts";

type Props = {
  data: CurrencyByDate[] | undefined;
  loading: boolean;
  value: number;
  onChange: (value: number) => void;
}

const CurrencySelector: FC<Props> = ({data, loading, onChange, value}) => {
  const options = data ? formSelectOptions(data) : [];

  return (
    <Select
      style={{ minWidth: 90, width: 'auto' }}
      options={options}
      loading={loading}
      onChange={onChange}
      value={value}
    />
  );
};

export default CurrencySelector;