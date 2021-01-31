//the following import and require equals to each other
import * as countriesFile from './countries';
import * as webtechFile from './web_techs';
// let countryFile = require('./countries.js');
// let webTechFile = require('./web_techs.js');

//task 1
console.log(countriesFile.countries);
console.log(webtechFile.webTechs);
let countries = countriesFile.countries;
let webTechs = webtechFile.webTechs;
//task 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replace(/,/g, '').replace(/\./g, '');
console.log(text);
let wordList = text.split(" ");
console.log(wordList);
console.log(wordList.length);

//task 3
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat");
console.log(shoppingCart);

console.log(shoppingCart.slice(0, -1));

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);

console.log(countries);
console.log(webTechs);

if (countries.indexOf("Ethiopia") != -1) {
  console.log("ETHIOPIA");
}

if (webTechs.indexOf("Sass") != -1) {
  console.log('Sass is a CSS preprocess');
}
else {
  console.log(webTechs);
}
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sortedAges = ages.sort();
console.log(sortedAges);
let minAge = sortedAges[0];
let maxAge = sortedAges[sortedAges.length - 1];

let sum = 0;
sortedAges.forEach(item => sum += item);
console.log(sum);

function mediumItems(sortedAges) {
  if (sortedAges.length % 2 == 1) {
    //odd
    return sortedAges.splice(Math.round((sortedAges.length - 1) / 2), 1);
  }
  else {
    //even
    return sortedAges.splice(Math.round((sortedAges.length - 1) / 2), 2);
  }
}
console.log(mediumItems(sortedAges));


let dividedCountries = [];
console.log(countries);
countries.push("Test");
function divideCountries(countries) {
  if (countries.length % 2 == 1) {
    //odd
    dividedCountries.push(countries.slice(0, Math.round((countries.length - 1) / 2) + 1));
    dividedCountries.push(countries.slice(Math.round((countries.length - 1) / 2) + 1, countries.length));
    console.log(Math.round((countries.length - 1) / 2));
    return dividedCountries; 
    
  }
  else {
    //even
    dividedCountries.push(countries.slice(0, Math.round((countries.length - 1) / 2)));
    dividedCountries.push(countries.slice(Math.round((countries.length - 1) / 2), countries.length));
    return dividedCountries;
  }
}
console.log(divideCountries(countries));
