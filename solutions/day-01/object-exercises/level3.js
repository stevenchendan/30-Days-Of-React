let personalAccount = {
  firstName: "Steven",
  lastName: "Chen",
  incomes: 5700,
  expenses: 1600,
  totalIncome: function () {
    return this.incomes;
  },
  totalExpense: function () {
    return this.expenses;
  },
  accountInfo: function() {
    return this.firstName + " " + this.lastName;
  },
  addIncome: function(amount) {
    this.incomes += amount;
    return this.incomes;
  },
  addExpense: function(amount) {
    this.expenses += amount;
    return this.expenses;
  },
  accountBalance : function() {
    return this.incomes - this.expenses;
  },
}

console.log(personalAccount.totalIncome());
console.log(personalAccount.addIncome(200));
console.log(personalAccount.addExpense(500));
console.log(personalAccount.accountBalance());



const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]

let newUser = {
  _id: 'ab12ex',
  username: 'Steven',
  email: 'stevenchenau@gmail.com',
  password: '123123',
  createdAt: '01/02/2020 9:00 AM',
  isLoggedIn: false,
}
function signUp(newUser) {
  if (!newUser) {
    console.log("User information is incorrtect");
    return false;
  }
  //add to user object list
  //if exist then tell the user
  for (const index in users) {
    if (users[index] == newUser.name) {
      console.log("User already exist");
      return false;
    }
  }
  users.push(newUser);
  return true;
}

console.log(signUp(newUser));


function signIn(userName) {
  if (!userName) {
    return false;
  }
  let userIndex = 0;
  for (const index in users) {
    if (users[index] == newUser.name) {
      userIndex = index;
    }
    console.log("User does not exist");
    return false;
  }
  users[userIndex].isLoggedIn = true;
  console.log("Login success");
  return true;
}
console.log(signIn("Steven"));

userRate = { userId: 'fg12cy', rate: 5 };

function rateProduct(productName ,userRate) {
  console.log(products);
  for (const index in products) {
    if (products[index].name == productName) {
      products[index].ratings.push(userRate);
      console.log("Rate successfully");
      return true;
    }
  }
  console.log("Product does not exist");
  return false;
}

function averageRating(productName) {
  let sum = 0;
  for (const index in products) {
    if (products[index].name == productName) {
      products[index].ratings.map(item => sum += item.rate);
    }
  }
  if (sum != 0) {
    console.log("Success");
    return sum / products.length;
  }
  console.log("Cannot calculate the product rate");
  return -1;
}

console.log(rateProduct('TV' ,userRate));
console.log(averageRating('TV'));

function likeProduct(userId, productName) {
  for (const index in products) {
    if (products[index].name == productName) {
      if (products[index].likes.includes(userId)) {
        console.log("Already liked");
        return false;
      }
      products[index].likes.push(userId);
      console.log("Liked");
      return true;
    }
  }
  console.log("Product does not exist");
  return false;
}

console.log(likeProduct("fg12cy", "TV"));
