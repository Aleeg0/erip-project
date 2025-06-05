import type {Dayjs} from "dayjs";

export const formQueryParams = (date: Dayjs) => {
  return  {date: date.format('YYYY-MM-DD')};
};