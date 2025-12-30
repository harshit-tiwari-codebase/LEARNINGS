const arr = [10,20,30,40,50,60];

const newARR = arr.filter((number)=> number >30);

console.log(newARR);

//real world example of filter
const prices = [199, 499, 1200, 2500, 350];

const cheapProducts = prices.filter(price => price < 500);

console.log(cheapProducts);
