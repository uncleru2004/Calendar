import Month from "./Month";
import { parseDate } from "./parseDate";

export default function Dialog({ startShift, days, month }) {
  console.log(startShift);
  return (
    <>
      <h3>{month.toUpperCase()}</h3>
      
      <table>
        <thead>
          <tr>
            <th>ПН</th>
            <th>ВТ</th>
            <th>СР</th>
            <th>ЧТ</th>
            <th>ПТ</th>
            <th>СБ</th>
            <th>ВС</th>
          </tr>
        </thead>

        <tbody>
          <Month startShift={startShift} days={days} />
        </tbody>
      </table>
    </>
  );
}
