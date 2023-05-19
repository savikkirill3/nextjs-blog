import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const dateStr = dateString || "2016-01-01";
  let date = parseISO(dateStr);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
