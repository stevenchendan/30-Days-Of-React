// Create an empty object called dog
let dog = {};
// Print the the dog object on the console
console.log(dog);
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "panpan";
dog.color = "brown"
dog.age = 13;
dog.bark = function() {
  return "wang wang";
}
// Get name, legs, color, age and bark value from the dog object
console.log(dog.age);
console.log(dog.color);
console.log(dog.name);
console.log(dog.bark());

// Set new properties the dog object: breed, getDogInfo
dog.breed = "pug";
dog.getDogInfo = function() {
  return dog.breed;
}

let dogObject = {
  name: "panpan",
  age : 13,
  color: "brown",
  breed: "pug",
  bark () {
    return "wang wang";
  },
  getDogInfo () {
    return this.breed;
  }
}
console.log(dog.name);
console.log(dog.age);
console.log(dog.breed); //?.
console.log(dog.bark());
console.log(dog.getDogInfo());





