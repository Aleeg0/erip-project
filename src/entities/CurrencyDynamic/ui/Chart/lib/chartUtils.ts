import dayjs from "dayjs";

export const labelFormatter = (label: string) => {
  const date = dayjs(label, 'DD.MM.YYYY');
  return `Дата: ${date.format("D MMM YY")}`;
};

export const dateTickFormatter = (tick: string) => {
  const date = dayjs(tick, 'DD.MM.YYYY');
  return date.format("DD MMM");
};