//Declare an empty array;
let countryEmpty = [];
//Declare an array with more than 5 number of elements
let countries = ["America", "Australia", "China", "Japan", "Korea"];
//Find the length of your array
console.log(countries.length);
//Get the first item, the middle item and the last item of the array
console.log(countries[0]);
console.log(countries[countries.length-1]);
console.log(countries[Math.round(countries.length/2)]);
//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [1, "1", true, null, undefined, {}, Symbol.for("shared")];

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);
console.log(itCompanies[0]);
console.log(itCompanies[Math.round((itCompanies.length - 1) / 2)]);
console.log(itCompanies[itCompanies.length - 1]);
console.log(...itCompanies);
console.log(itCompanies.length);
itCompanies.forEach(item => {
  console.log(item.toUpperCase());
});

function printCompanyNames() {
  outputString = "";
  for (let index = 0; index < itCompanies.length; index++) {
    if (index < itCompanies.length - 1) {
      outputString += itCompanies[index] + ' ,';
    }
    else {
      outputString += 'and ' + itCompanies[index] + ' are are big IT companies';
    }
  }
  return outputString;
}

console.log(printCompanyNames());

function checkCompanyExist(companyList, companyName) {
  if (!companyList || !companyName) {
    return -1;
  }
  return companyList.indexOf(companyName)
}
console.log(checkCompanyExist(itCompanies, "Amazon"));

//filter the string have two character o
const result = itCompanies.filter(company => /o*o/.test(company));
console.log(result);

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(3));
console.log(itCompanies.slice(-3));

function getMiddleCompaniesFromList(companies) {
  console.log(companies);
  
  if (!companies) {
    return [""];
  }
  if (companies.length % 2 == 0) {
    return [companies[Math.round((companies.length - 1) / 2) - 1], companies[Math.round((companies.length -1 ) / 2)]];
  } 
  else {
    return [companies[Math.round(companies.length - 1)]];
  }
}

console.log(getMiddleCompaniesFromList(itCompanies.slice(1)));

console.log(itCompanies.slice(1, itCompanies.length));

let listOfMiddleCompanies = getMiddleCompaniesFromList(itCompanies.slice(1));
//Slice out the middle IT company or companies from the array
let resultList = [];
listOfMiddleCompanies.forEach(item => {
  let index = itCompanies.indexOf(item);
  itCompanies.splice(index, 1);
;});

console.log(itCompanies);

itCompanies.splice(-1,1);
console.log(itCompanies);
itCompanies = [];



