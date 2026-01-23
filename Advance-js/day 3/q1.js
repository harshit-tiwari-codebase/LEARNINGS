// Section 1: 

// Task1 . Create a user object that stores name and email, with a login method that prints "User logged in."

// Task2.  Now imagine you have 5 users. First, think about how you'd manage them without using a class. Then, convert the same logic using a class and see how much cleaner the code becomes. Write code for both approaches.

// Task3.Next, create a product object that stores name and price, with a method that returns the final price after applying a discount.

// The goal: understand why keeping data and behavior together makes code easier to manage.

let obj1 = {
    name:"harshit",
    mail:"harshit124@",
    login:function(){
       console.log(`${obj1.name} is logged in mail is ${obj1.mail}`);
       
    }
}
let obj2 = {
    name:"sourabh",
    mail:"harshit124@",
    login:function(){
       console.log(`${obj2.name} is logged in mail is ${obj2.mail}`);
       
    }
}
let obj3 = {
    name:"krishna",
    mail:"harshit124@",
    login:function(){
       console.log(`${obj3.name} is logged in mail is ${obj3.mail}`);
       
    }
}
let obj4= {
    name:"shashank",
    mail:"harshit124@",
    login:function(){
       console.log(`${obj4.name} is logged in mail is ${obj4.mail}`);
       
    }
}
let obj5 = {
    name:"shimon",
    mail:"harshit124@",
    login:function(){
       console.log(`${obj5.name} is logged in mail is ${obj5.mail}`);
       
    }
}

obj1.login();

class User {
    constructor(name,mail){
        this._name = name;
        this.email = mail;
    }
      login(){
            console.log(`${this._name} is logged in ${this.email}`);
            
        }
}

let user1 = new User("Harshit", "harshit@gmail.com");
let user2 = new User("Aman", "aman@gmail.com");
let user3 = new User("Rohit", "rohit@gmail.com");
let user4 = new User("Neha", "neha@gmail.com");
let user5 = new User("Priya", "priya@gmail.com");

// login call
user1.login();
user2.login();
user3.login();
user4.login();
user5.login();


let product = {
    name: "Laptop",
    price: 60000,

    getFinalPrice(discountPercent) {
        let discountAmount = (this.price * discountPercent) / 100;
        return this.price - discountAmount;
    }
};

// usage
console.log(product.getFinalPrice(10)); // 10% discount
