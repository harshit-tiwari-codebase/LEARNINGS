//premitive data types
let name = "John"; // string
let age = 30; // number
let isStudent = true; // boolean
let address = null; // null
let phone; // undefined
let id = Symbol("id"); // symbol
let bigNumber = 12345678901234567890n; // bigint

// data types ko check karne ke liye typeof operator ka use karte hai
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean
console.log(typeof address); // object
console.log(typeof phone); // undefined
console.log(typeof id); // symbol
console.log(typeof bigNumber); // bigint

// non-premitive data types
let person = { // object
    name: "Alice",
    age: 25
};

console.log(typeof person);

let arr = [1,20.2,true,"hello"]; // array
console.log(arr);
console.log(typeof arr);

let greet = function() { // function
    console.log("Hello!");
}

greet();
console.log(typeof greet); 


//i want to change the name in person object
person.name =  "harshit";
console.log(person);