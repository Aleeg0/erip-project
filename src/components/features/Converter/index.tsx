import styles from './styles.module.scss';
import {Button, Input} from "antd";
import {today} from "@/shared/const.ts";
import {type CurrencyByDate, useGetCurrenciesByDateQuery} from "@/entities/Currencies/model";
import CurrencySelector from "./ui/CurrencySelector.tsx";
import {useConvertForm} from "@/components/features/Converter/lib/useConvertForm.ts";
import {SwapOutlined} from "@ant-design/icons";
import {useMemo} from "react";
import {ShareButton} from "@/components/widget";
import {formQueryParams} from "./lib/formQueryParams.ts";

const BLRCurrencyByDate: CurrencyByDate = {
  id: 933,
  abbreviation: 'BYN',
  scale: 1,
  name: 'Белорусский рубль',
  rate: 1
};

const Converter = () => {
  const {
    data,
    isLoading
  } = useGetCurrenciesByDateQuery(today.format("YYYY-MM-DD"));

  const currencies = useMemo(() =>
      data ? [BLRCurrencyByDate, ...data] : []
  , [data]);

  const {
    form: {idA, idB, sumA, sumB},
    onChangeIdA,
    onChangeIdB,
    onChangeSumA,
    onChangeSumB,
    onSwapIds
  } = useConvertForm(currencies);
  
  const {currenciesA, currenciesB} = useMemo(() => ({
    currenciesA: currencies.filter((item) => item.id !== idB),
    currenciesB: currencies.filter((item) => item.id !== idA)
  }), [idA, idB, currencies]);

  const params = formQueryParams(idA, idB, sumA);


  return (
    <div className={styles.Converter_container}>
      <div className={styles.Converter_header}>
        <h1>
          Конвертер валют
        </h1>
      </div>
      <div className={styles.Converter_content}>
        <div className={styles.Converter_contentItem}>
          <Input
            value={sumA}
            onChange={(e) => onChangeSumA(e.target.value)}
            placeholder={"0"}
            addonAfter={
              <CurrencySelector
                data={currenciesA}
                loading={isLoading}
                value={idA}
                onChange={onChangeIdA}
              />
            }
          />
        </div>
        <div className={styles.Converter_contentItem}>
          <Button
            icon={<SwapOutlined />}
            type="primary"
            onClick={onSwapIds}
          >
            Поменять местами
          </Button>
        </div>
        <div className={styles.Converter_contentItem}>
          <Input
            value={sumB}
            onChange={(e) => onChangeSumB(e.target.value)}
            placeholder={"0"}
            addonAfter={
              <CurrencySelector
                data={currenciesB}
                loading={isLoading}
                value={idB}
                onChange={onChangeIdB}
              />
            }
          />
        </div>
      </div>
      <ShareButton params={params}/>
    </div>
  );
};

export default Converter;