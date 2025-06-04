import {useState} from "react";
import type {Dayjs} from "dayjs";
import {
  type Currency, selectFilters, type DateCouple, type Code, setFilters
} from "@/entities/CurrencyDynamic/model";
import {useAppDispatch, useAppSelector} from "@/shared/redux";


type FiltersForm = {
  date: DateCouple;
  parentID: Code;
}

export const useInputForm = () => {
  const dispatch = useAppDispatch();
  const reduxState = useAppSelector(selectFilters);
  const [form, setForm] = useState<Partial<FiltersForm>>({
    ...reduxState
  });

  const updateDates = ([start, end]: [Dayjs | null, Dayjs | null]) => {
    console.log(start, end);
    setForm(f => ({
      ...f,
      date: start && end
        ? {
          startDate: start.format('YYYY-MM-DD'),
          endDate: end.format('YYYY-MM-DD')
        }
        : undefined
    }));
  };

  const updateCurrency = (value: string) => {
    setForm(f => ({
      ...f,
      parentID: value,
    }));
  };

  const onSubmit = (currencyList: Currency[] | undefined) => {
    const {date, parentID} = form;

    if (!currencyList || !date || !date.startDate || !date.endDate || !parentID) return;

    dispatch(setFilters({date, parentID}));
  };

  const isFulfilled = !!(form.parentID && form.date?.startDate);

  return {
    form,
    isFulfilled,
    updateDates,
    updateCurrency,
    onSubmit,
  };
};