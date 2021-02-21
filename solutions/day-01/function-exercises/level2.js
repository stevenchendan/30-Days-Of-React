//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray (array) {
  console.log(...array);
}
printArray([1,2,3,4,5]);


function showDataTime() {
  let date = new Date();


  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();
  console.log(day + "/" + month + "/" + year + " " + hour + ":" + minute);
}
showDataTime();

let xSwapValue = 3;
let ySwapValue = 4;

function swapValues(x, y) {
  xSwapValue = y;
  ySwapValue = x;
}
swapValues(xSwapValue, ySwapValue);
console.log(xSwapValue, ySwapValue);


//reverse array
function reverseArray(array) {
  let result = []
  for (let i of array) {
    console.log(i);
    result.unshift(i);
  }
  return result;
}
console.log(reverseArray([1,2,3,4]));


//caplitalize array
function caplitalizeArray(array) {
  if (array === undefined || array.length === 0) {
    return [];
  }
  for (let i in array) {
    
    array[i] = array[i].toUpperCase();
  }
  return array;
}
console.log(caplitalizeArray(["a", "b", "c"]));

function addItem(item) {
  let result = [];
  return result.push(item);
}
console.log(addItem(1));

let arrayToBeRemoved = [1, 2, 3, 4];
const remove = function removeItem(index, array) {
  if (array === undefined || array.length === 0) {
    return [];
  }
  let result = array;
  result.splice(1, index);
  return result;
}
console.log(remove(1,arrayToBeRemoved));


const evensAndOdds = function countOfEvensAndOdds (num) {
  let evens = 0;
  let odds = 0;
  if (num % 2 == 1) {
    evens = parseInt(num / 2);
    odds = evens + 1;
  } else {
    odds = parseInt(num / 2);
    evens = odds + 1;
  }
  

  return [evens, odds];
}
console.log(evensAndOdds(3));

//sum number 可以接受任意多参数
const sumNumber = function sumNumberElements() {
  let result = 0;
  console.log(arguments);
  for (let index = 0; index < arguments.length; index++) {
    result += arguments[index];
  }
  return result;
}
console.log(sumNumber(1, 2, 3, 4));


const userIdGenerator = function automaticallyGenerateUserId () {
  let result = "";
  result = Math.random().toString(36).substring(6);

  return result;
}
console.log(userIdGenerator());

