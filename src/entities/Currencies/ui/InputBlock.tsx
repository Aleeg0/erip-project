import {Button, type DatePickerProps} from "antd";
import {useCallback, useState} from "react";
import dayjs from "dayjs";
import styles from './styles.module.scss';
import {useAppDispatch, useAppSelector} from "@/shared/redux";
import {currenciesSlice} from "@/entities/Currencies/model";
import {today} from "../lib/const.ts";
import {DatePicker} from "@/components/widget";

const InputBlock = () => {
  // states
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs>(dayjs(useAppSelector(currenciesSlice.selectors.selectDate)));
  const onChange: DatePickerProps["onChange"] = useCallback((date: dayjs.Dayjs) => {
    setSelectedDate(date);
  }, []);

  // redux logic
  const dispatch = useAppDispatch();
  const onSubmit = () => {
    dispatch(currenciesSlice.actions.setDate(selectedDate.format('YYYY-MM-DD')));
  };

  return (
    <div className={styles.InputBlock_content}>
      <div className={styles.InputBlock_dateInput}>
        <div className={styles.InputBlock_dateInput__label}>
          <p>Выберете дату:</p>
        </div>
        <div className={styles.InputBlock_dateInput__picker}>
          <DatePicker
            value={selectedDate}
            onChange={onChange}
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
    </div>
  );
};

export default InputBlock;