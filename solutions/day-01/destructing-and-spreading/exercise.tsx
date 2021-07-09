interface Person {
  firstName: String,
  lastName: String,
  age: Number,
  country: String,
  job: String,
  skills: Array<string>,
  languages: Array<string>
}

const person:Person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}

const getPersonInfo = (personObject: Person) => {
  const {firstName, lastName, age, country, job, skills, languages} = personObject;
  let result = `${firstName} ${lastName} lives in 
  ${country}. He is  ${age} years old. He is an 
  ${job}. He teaches ${skills}. 
  He speaks ${languages}`
  console.log(result);
  
}

getPersonInfo(person);
