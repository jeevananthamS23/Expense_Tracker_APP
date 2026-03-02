export default function DateFormater(date) {
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
}

export function LastSevenDays(date, days) {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() - days);
  return newDate;
}