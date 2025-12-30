const arr = [10,20,30,40,50,60];

//define forEach loop
arr.forEach((number)=>{
    console.log(number);
})


//using forEach loop
let sum = 0;
arr.forEach((n)=>{
    sum = sum+n;
})
console.log(sum);
