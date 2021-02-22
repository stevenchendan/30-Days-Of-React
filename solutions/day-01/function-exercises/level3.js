const userIdGeneratedByUser = function autoGenerateUserIdGenerated() {

}

console.log(userIdGeneratedByUser());


const shuffleArray = function generateShuffleArray(array) {
  let result = [];
  if (array === undefined || array.length === 0) {
    return [];
  }
  for (let i = 0; i < array.length; i++) {
    [array[i], array[(i + 2) % array.length]] = [array[(i + 2) % array.length], array[i]]
  }
  result = array;
  return result;
}
console.log(shuffleArray([1, 2, 4, 2, 1]));


const factorial = function generateFactorialFromNumber(num) {
  if (num < 0) {
    return 0;
  }
  let result = 1;
  let index = 1;
  while (index <= num) {
    result = index * result;
    index += 1;
  }
  return result;
}

console.log(factorial(4));

const checkEmpty = function checkPrameterEmptyOrNot(value) {
  if (!value || value === undefined || value == "") {
    return true;
  }
  return false;
}
console.log(checkEmpty(""));

const average = function averageOfArray(items) {
  if (items.every(e => typeof(e) == Number)) {
    return "Not all items are number in this array"
  }
  let result = 0;
  for (const item of items) {
    result += item;
  }
  result = result / items.length;
  return result;
}
console.log(average([0, 1, 2, 3]));
