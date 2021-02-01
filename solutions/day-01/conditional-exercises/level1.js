function drivingPermit(age) {
  //edge cases
  if (!age || age == 0) {
    return false;
  }

  if (age < 18) {
    return (`You are left with ${18 - age} years to drive.`);
  }
  else {
    return ('You are old enough to drive');
  }
}
console.log(drivingPermit(20));

function compareNumbers(numA, numB) {
  let result = "";
  if (numA > numB) {
    result = `${numA} is greater than ${numB}`;
  }
  else if (numA < numB) {
    result = `${numA} is less than ${numB}`; 
  }
  else {
    result = `${numA} is equals to ${numB}`;
  }
  return result;
}
console.log(compareNumbers(18, 18));


function determindOddAndEven(num) {
  let result = "";
  if (num % 2 == 1) {
    return `${num} is odd number`;
  }
  else {
    return `${num} is even number`;
  }
}
console.log(determindOddAndEven(12));



