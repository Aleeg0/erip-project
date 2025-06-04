import styles from './styles.module.scss';
import {useGetCurrenciesQuery} from "@/entities/CurrencyDynamic/model";
import {Button} from "antd";
import DateRangePicker from "./ui/DateRangePicker.tsx";
import CurrencySelector from "./ui/CurrencySelector.tsx";
import {useInputForm} from "./lib/useInputForm.ts";


const InputBlock = () => {
  // form
  const {form: {date, parentID}, isFulfilled, updateDates, updateCurrency, onSubmit} = useInputForm();

  // currencies query
  const {data, isLoading} = useGetCurrenciesQuery();

  return (
    <div className={styles.InputBlock_content}>
      <div className={styles.InputBlock_inputs}>
        <div className={styles.InputBlock_inputs__picker}>
          <DateRangePicker
            onChange={updateDates}
            value={date}
          />
        </div>
        <div className={styles.InputBlock_inputs__selector}>
          <CurrencySelector
            data={data}
            onChange={updateCurrency}
            parentID={parentID}
          />
        </div>
      </div>
      <div className={styles.InputBlock_sumitButton}>
        <Button
          style={{width:'100%'}}
          type="primary"
          loading={isLoading}
          onClick={() => onSubmit(data?.[parentID ?? ''])}
          disabled={!isFulfilled}
        >
          Построить
        </Button>
      </div>
    </div>
  );
};

export default InputBlock;