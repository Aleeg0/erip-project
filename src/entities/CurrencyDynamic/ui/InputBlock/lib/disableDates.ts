import type {DatePickerProps} from "antd";
import type {Dayjs} from "dayjs";
import {today} from "@/shared/const.ts";

export const disableYearDateRange: DatePickerProps['disabledDate'] = (current, { from }) => {
  if (from) {
    const minDate = from.add(-1, 'years');
    const maxDate = from.add(1, 'years');

    return (
      current < minDate ||
      current > maxDate
    );
  }

  return false;
};

export const disableStartDate =
  (endDate: Dayjs | null)=>
  (current: Dayjs) => {

  const moreThenYear = endDate && current.isBefore(endDate.add(-1, 'years'));
  const moreThenToday = current.isAfter(today);
  const moreThenEnd = endDate && current.isAfter(endDate);

  return !!(moreThenYear || moreThenToday || moreThenEnd);
};

export const disableEndDate =
  (startDay: Dayjs | null)=>
    (current: Dayjs) => {

      const moreThenYear = startDay && current.isAfter(startDay.add(1, 'years'));
      const moreThenToday = current.isAfter(today);
      const moreThenStart = startDay && current.isBefore(startDay);

      return !!(moreThenYear || moreThenToday || moreThenStart);
    };