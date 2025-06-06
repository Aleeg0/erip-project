import {today} from "@/shared/const.ts";
import {DatePicker, Grid} from "antd";
import dayjs, {type Dayjs} from "dayjs";
import type {FC} from "react";
import type {DateCouple} from "@/entities/CurrencyDynamic/model";
import styles from '../styles.module.scss';

const {RangePicker} = DatePicker;
const {useBreakpoint} = Grid;

type Props = {
  onChange: (dates: [Dayjs, Dayjs]) => void;
  value: DateCouple
};

const DateRangePicker: FC<Props> = ({
  onChange,
  value
}) => {
  const startDate = dayjs(value.startDate);
  const endDate = dayjs(value.endDate);

  const screens = useBreakpoint();
  const isMobile = !screens.md;

  if (isMobile) {
    return (
      <div className={styles.RangePicker_mobile}>
        <DatePicker
          value={startDate}
          onChange={(val) => onChange([val, endDate])}
          maxDate={endDate || today}
          placement={"bottomLeft"}
          placeholder={"Дата с"}
          format={"L"}
          allowClear={false}
        />
        <DatePicker
          value={endDate}
          onChange={(val) => onChange([startDate, val])}
          maxDate={today}
          placement={"bottomRight"}
          placeholder={"Дата по"}
          format={"L"}
          allowClear={false}
        />
      </div>
    );
  }

  return (
    <RangePicker
      value={[startDate, endDate]}
      onChange={(dates) => {
        if (dates && dates[0] && dates[1]) {
          onChange([dates[0], dates[1]]);
        } else {
          onChange([today, today]);
        }
      }}
      maxDate={today}
      placement={"bottomRight"}
      placeholder={['дата с', 'дата по']}
      format={"L"}
      allowClear={false}
    />
  );
};

export default DateRangePicker;