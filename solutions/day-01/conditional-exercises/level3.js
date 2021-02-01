//find how many days in a month
//solution 1: swith
function numberOfDays(month, year) {
  let thirtyOneDay = [1, 3, 5, 7, 8, 10, 12];
  let thirtyDay = [4, 6, 9, 11];
  let result = 30;
  
  let isLeapYear = determineLeapYear(year);
  
  switch (month) {
    case thirtyOneDay.includes(month):
      result = 31;
      break;
    case thirtyDay.includes(month):
      result = 30;
      break;
    case 2:
      if (!!isLeapYear) {
        result = 29;
      }
      else {
        result = 28;
      }
      break;
    default:
      result = 30;
      break;
  }
  return result;
}

function determineLeapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

let count = numberOfDays(2, 2021);
console.log(count);



