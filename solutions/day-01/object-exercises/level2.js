const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

//Find the person who has many skills in the users object.
let mostSkillPeople = [];
function findPeopleWithMostSkills() {
  let result = [];
  for (const key in users) {
    if (!result || result.length == 0) {
      result = [key, users[key].skills.length];
    }
    else {
      if (users[key].skills.length > result[1]) {
        result = [key, users[key].skills.length];
      }
    }
    console.log(key);
    console.log(users[key].skills.length);
  }
  result = result.sort();
  return result;
}
mostSkillPeople = findPeopleWithMostSkills();
console.log(mostSkillPeople); //?.


//Count logged in users,count users having greater than equal to 50 points from the following object.
let count = 50;
function findUserPointGreaterThanNumber(count) {
  let result = []
  for (const key in users) {
    if (users[key].points >= count) {
      result.push(key);
    }
  }
  return result;
}
let listOfUser = [];
listOfUser = findUserPointGreaterThanNumber(50);
console.log(listOfUser);

// Find people who are MERN stack developer from the users object
function findMERNStackDevelopers() {
  let result = [];
  let mernStackList = ['MongoDB', 'Express', 'React', 'Node'];
  for (const key in users) {
    let includesAll = mernStackList.every(item => users[key].skills.includes(item));
    if (includesAll) {
      result.push(key);
    }
  }
  return result;
}
let mernDevelopers = findMERNStackDevelopers();
console.log(mernDevelopers);


// Set your name in the users object without modifying the original users object
let newUserObject = Object.assign({}, users);
// let newUserObject = users;
newUserObject["Steven"] = {
  email: 'stevenchenau@gmail.com',
  skills: ['Web', 'ML', 'Cloud'],
  age: 31,
  isLoggedIn: false,
  points: 80
};
console.log(newUserObject["Steven"]);
console.log(users["Steven"]);
// Get all keys or properties of users object
const entries = Object.entries(users);
console.log(entries);

// Get all the values of users object
const values = Object.values(users);
console.log(values);

// Use the countries object to print a country name, capital, populations and languages.
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
