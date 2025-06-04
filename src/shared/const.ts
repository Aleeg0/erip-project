import dayjs from "dayjs";

export const today = dayjs();
export const monthAgo = today.add(-1, "month");

export const todayStr = today.format("YYYY-MM-DD");
export const monthAgoStr = monthAgo.format("YYYY-MM-DD");
