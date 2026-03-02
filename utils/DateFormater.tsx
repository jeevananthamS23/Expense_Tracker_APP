export default function DateFormater(date) {
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
}
