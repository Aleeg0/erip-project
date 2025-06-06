import {useEffect, useState} from "react";
import dayjs, {type Dayjs} from "dayjs";
import {
  type Currency, selectFilters, setFilters, type CurrencyDynamicFilters
} from "@/entities/CurrencyDynamic/model";
import {useAppDispatch, useAppSelector} from "@/shared/redux";
import {useNavigate, useSearchParams} from "react-router";

export const useInputForm = () => {
  // redux store
  const dispatch = useAppDispatch();
  const reduxValue = useAppSelector(selectFilters);

  // url query
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  // ?date=2025-03-02
  useEffect(() => {
    const startDate = dayjs(searchParams.get("startDate"));
    const endDate = dayjs(searchParams.get("endDate"));
    const parentID = searchParams.get("parentID");

    if (startDate.isValid() && endDate.isValid() && parentID) {
      dispatch(setFilters({
        date: {
          startDate: startDate.format('YYYY-MM-DD'),
          endDate: endDate.format('YYYY-MM-DD'),
        },
        parentID
      }));
      navigate('/currency-dynamic', {replace: true});
    }
  }, [dispatch, navigate, searchParams]);

  const [userValue, setUserValue] = useState<Partial<CurrencyDynamicFilters>>();

  const formValue = {
    ...reduxValue,
    ...userValue,
  };

  const updateDates = ([start, end]: [Dayjs, Dayjs]) => {
    setUserValue({
      ...formValue,
      date: {
        startDate: start.format('YYYY-MM-DD'),
        endDate: end.format('YYYY-MM-DD')
      }
    });
  };

  const updateCurrency = (value: string) => {
    setUserValue(formValue => ({
      ...formValue,
      parentID: value,
    }));
  };

  const onSubmit = (currencyList: Currency[] | undefined) => {
    const {date, parentID} = formValue;

    if (!currencyList) return;

    dispatch(setFilters({date, parentID}));
  };

  const isFulfilled = !!(formValue.parentID && formValue.date?.startDate);

  return {
    form: formValue,
    isFulfilled,
    updateDates,
    updateCurrency,
    onSubmit,
  };
};