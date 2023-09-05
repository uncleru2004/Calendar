import Week from "./Week";

export default function Month({ startShift, days }) {
  let res = [];
  for (let m = 1 - startShift; m <= days; m = m + 7) {
    res.push(<Week key={Math.random()} monday={m} days={days} />);
  }

  return <>{res}</>;
}
