function fullName(firstName, lastName) {
  if (!!firstName && !!lastName) {
    console.log("Invalid Name");
  }
  return firstName + " " + lastName;
}

function addNumbers(num1, num2) {
  return num1 + nums2;
}

function areaOfCircle(pai, r) {
  return pai * r * r;
}

function convertCelciusToFahrenheit(oC) {
  return (oC * 9 / 5) + 32;
}

function calculateBMI(weight, height) {
  let bmi = weight / (height * height);
}

function checkWeightGroup(weight) {
  let category = "";

  if (weight < 18.5) {
    category = "Underweight";
  } else if (weight >= 18.5 && weight <= 24.9) {
    category = "Normal weight";
  } else if (weight >= 25 && weight <= 29.9) {
    category = "Overweight";
  } else if (weight >= 30) {
    category = "Obese";
  } else {
    category = "Not Sure";
  }
  return category;
}


console.log(checkWeightGroup(26));


function checkSeason(month) {
  let season = "";
  switch (month.toLowerCase()) {
    case 'january':
      season = "Spring";
      break;
    case 'feburary':
      season = "Spring";
      break;
    case 'march':
      season = "Spring";
      break;
    case 'april':
      season = "Summer";
      break;
    case 'may':
      season = "Summer";
      break;
    case 'june':
      season = "Summer";
      break;
    case 'july':
      season = "Autumn";
      break;
    case 'august':
      season = "Autumn";
      break;
    case 'september':
      season = "Autumn";
      break;
    case 'october':
      season = "Winter";
      break;
    case 'noverber':
      season = "Winter";
      break;
    case 'december':
      season = "Winter";
      break;
    default:
      season = "Invalid season";
      break;
  }
  return season;
}

checkSeason("january")
console.log(checkSeason("january"));
