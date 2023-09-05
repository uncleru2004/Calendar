export function parseDate(value) {
  console.log(value)
  const MONTHS = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };

  const DAYS = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6,
  };

  if (value) {
    const date = new Date(value.substring(0,8) + '01');
    console.log(date)
    const options = { month: "long", weekday: "long", year: "numeric" };
    const parse = new Intl.DateTimeFormat("en-US", options).format(date);
    const DATE = parse.split(" ");
    console.log(DATE);
    console.log([DAYS[DATE[2]], MONTHS[DATE[0]], +DATE[1], DATE[0]] )
    
    if (DATE[0] === "February" && !(+DATE[1] % 1000)) {
      return [DAYS[DATE[2]], 29, +DATE[1], DATE[0]]
    } 

    if (DATE[0] === "February" && !(+DATE[1] % 100)) {
      return [DAYS[DATE[2]], MONTHS[DATE[0]], +DATE[1], DATE[0]]
    }

    if (DATE[0] === "February" && !(+DATE[1] % 4)) {
      return [DAYS[DATE[2]], 29, +DATE[1], DATE[0]]
    } 
    

    return [DAYS[DATE[2]], MONTHS[DATE[0]], +DATE[1], DATE[0]]
  }
}
