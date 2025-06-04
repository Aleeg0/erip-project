import dayjs from "dayjs";
import type {Currency} from "@/entities/CurrencyDynamic/model";


export const findCurrenciesCodes = (
  currencyList: Currency[],
  startDateStr: string,
  endDateStr: string
) => {
  const codes: string[] = [];
  const startDate = dayjs(startDateStr);
  const endDate = dayjs(endDateStr);

  for (const currency of currencyList) {
    const cur_DateStart = dayjs(currency.Cur_DateStart);
    const cur_DateEnd = dayjs(currency.Cur_DateEnd);

    if ((cur_DateStart.isBefore(endDate) || cur_DateStart.isSame(endDate)) &&
        (cur_DateEnd.isAfter(startDate) || cur_DateEnd.isSame(startDate))) {
      codes.push(currency.Cur_ID.toString());
    }
  }

  return codes;
};