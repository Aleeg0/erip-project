import {Button, type DatePickerProps} from "antd";
import {useCallback, useEffect, useState} from "react";
import dayjs, {type Dayjs} from "dayjs";
import styles from './styles.module.scss';
import {useAppDispatch, useAppSelector} from "@/shared/redux";
import {currenciesSlice} from "@/entities/Currencies/model";
import {today} from "@/shared/const.ts";
import {DatePicker} from "@/components/widget";
import {useNavigate, useSearchParams} from "react-router";
import ShareButton from "../../../../components/widget/ShareButton";
import {formQueryParams} from "./formQueryParams.ts";

const InputBlock = () => {
  // redux
  const dispatch = useAppDispatch();
  const reduxValue = dayjs(useAppSelector(currenciesSlice.selectors.selectDate));
  // url
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const date = dayjs(searchParams.get("date"));

    if (date.isValid()) {
      const dataStr = date.format('YYYY-MM-DD');
      dispatch(currenciesSlice.actions.setDate(dataStr));
      navigate('/', {replace: true});
    }
  }, [dispatch, navigate, searchParams]);

  // user
  const [userSelect, setUserSelect] = useState<Dayjs|null>(null);

  // displayValue
  const selectValue = userSelect ?? reduxValue;
  console.log(selectValue);

  // handlers
  const onSelectChange: DatePickerProps["onChange"] = useCallback((date: Dayjs) => {
    setUserSelect(date);
  }, []);
  const onSubmit = () => {
    dispatch(currenciesSlice.actions.setDate(selectValue.format('YYYY-MM-DD')));
  };

  const queryParams = formQueryParams(selectValue);

  return (
    <div className={styles.InputBlock_content}>
      <div className={styles.InputBlock_dateInput}>
        <div className={styles.InputBlock_dateInput__label}>
          <p>Выберете дату:</p>
        </div>
        <div className={styles.InputBlock_dateInput__picker}>
          <DatePicker
            value={selectValue}
            onChange={onSelectChange}
            format={"L"}
            placement={"bottomRight"}
            size={"large"}
            maxDate={today}
            allowClear={false}
          />
        </div>
      </div>
      <Button
        type="primary"
        onClick={onSubmit}
      >
        Отобразить
      </Button>
      <ShareButton
        params={queryParams}
      />
    </div>
  );
};

export default InputBlock;