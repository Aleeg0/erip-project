import {Select} from "antd";
import type {CurrenciesMap} from "@/entities/CurrencyDynamic/model";
import type {FC} from "react";
import {formSelectOptions} from "../lib/formSelectOptions.ts";


type Props = {
  data: CurrenciesMap | undefined;
  onChange: (value: string) => void;
  parentID?: string;
}

const CurrencySelector: FC<Props> = ({data, onChange, parentID}) => {
  const options = data ? formSelectOptions(data) : [];

  const defaultValue = parentID && options.find((item) => item.value === parentID)
    ? parentID
    : options[0]?.value;

  return (
    <Select
      loading={!data}
      style={{width: `100%`}}
      options={options}
      value={defaultValue}
      onChange={onChange}
    />
  );
};

export default CurrencySelector;