import type {CurrencyDynamicFilters} from "@/entities/CurrencyDynamic/model";

export const formQueryParams = ({date, parentID}:  CurrencyDynamicFilters) => {
  return {
    startDate: date.startDate,
    endDate: date.endDate,
    parentID: parentID,
  };
};