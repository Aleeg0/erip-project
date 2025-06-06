import styles from './styles.module.scss';
import {useGetCurrenciesQuery} from "@/entities/CurrencyDynamic/model";
import {Button} from "antd";
import {ShareButton} from "@/components/widget";
import DateRangePicker from "./ui/DateRangePicker.tsx";
import CurrencySelector from "./ui/CurrencySelector.tsx";
import {useInputForm} from "./lib/useInputForm.ts";
import {formQueryParams} from "./lib/formQueryParams.ts";


const InputBlock = () => {
  // form
  const {form, isFulfilled, updateDates, updateCurrency, onSubmit} = useInputForm();

  // currencies query
  const {data, isLoading} = useGetCurrenciesQuery();

  const queryParams = formQueryParams(form);

  return (
    <div className={styles.InputBlock_content}>
      <div className={styles.InputBlock_inputs}>
        <div className={styles.InputBlock_inputs__picker}>
          <DateRangePicker
            onChange={updateDates}
            value={form.date}
          />
        </div>
        <div className={styles.InputBlock_inputs__selector}>
          <CurrencySelector
            data={data}
            onChange={updateCurrency}
            parentID={form.parentID}
          />
        </div>
      </div>
      <div className={styles.InputBlock_sumitButton}>
        <Button
          style={{width:'100%'}}
          type="primary"
          loading={isLoading}
          onClick={() => onSubmit(data?.[form.parentID ?? ''])}
          disabled={!isFulfilled}
        >
          Построить
        </Button>
      </div>
      <ShareButton
        params={queryParams}
      />
    </div>
  );
};

export default InputBlock;