import {today} from "@/shared/const.ts";
import {DatePicker, Grid} from "antd";
import {disableEndDate, disableStartDate, disableYearDateRange} from "../lib/disableDates.ts";
import dayjs, {type Dayjs} from "dayjs";
import type {FC} from "react";
import type {DateCouple} from "@/entities/CurrencyDynamic/model";
import styles from '../styles.module.scss';

const {RangePicker} = DatePicker;
const {useBreakpoint} = Grid;

type Props = {
  onChange: (dates: [Dayjs | null, Dayjs | null]) => void;
  value?: DateCouple
};

const DateRangePicker: FC<Props> = ({
  onChange,
  value
}) => {
  const startDate = value ? dayjs(value.startDate) : null;
  const endDate = value ? dayjs(value.endDate) : null;

  const screens = useBreakpoint();
  const isMobile = !screens.md;

  if (isMobile) {
    return (
      <div className={styles.RangePicker_mobile}>
        <DatePicker
          value={startDate}
          onChange={(val) => onChange([val, endDate ?? val])}
          maxDate={endDate || today}
          disabledDate={disableStartDate(endDate)}
          placement={"bottomLeft"}
          placeholder={"Дата с"}
          format={"L"}
        />
        <DatePicker
          value={endDate}
          onChange={(val) => onChange([startDate ?? val, val])}
          maxDate={today}
          disabledDate={disableEndDate(startDate)}
          placement={"bottomRight"}
          placeholder={"Дата по"}
          format={"L"}
        />
      </div>
    );
  }

  return (
    <RangePicker
      value={[startDate, endDate]}
      onChange={(dates) => onChange(dates || [null, null])}
      maxDate={today}
      placement={"bottomRight"}
      placeholder={['дата с', 'дата по']}
      format={"L"}
      disabledDate={disableYearDateRange}
    />
  );
};

export default DateRangePicker;