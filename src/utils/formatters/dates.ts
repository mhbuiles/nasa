import dayjs from "dayjs";

const formatDate = (unformattedDate: string): string =>
  dayjs(unformattedDate).format("MM/DD/YYYY");

const formatTime = (unformattedDate: string): string =>
  dayjs(unformattedDate).format("HH:mm:ss");

export { formatDate, formatTime };
