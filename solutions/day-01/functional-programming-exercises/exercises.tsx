const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

products.forEach((item) => {
  item.price = (item.price === ' ' || item.price === '') ?  "unknown" : item.price + " euros"
  console.log("The price of " + item.product + " " + item.price);
})


let result = 0;
products.forEach((item) => {
})




