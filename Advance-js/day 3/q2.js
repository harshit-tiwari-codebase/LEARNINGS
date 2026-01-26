
// SECTION 2: Classes and Objects (Reinforcement)
// 	4.	Create a class named Employee that stores:
// name
// salary

// Add a method showDetails that prints name and salary.
// 	5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.
// 	6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again?



class Employee {
    constructor(Ename,Esalary){
        this.name = Ename,
        this.salary = Esalary
    }
     showDetails(){
        console.log(`Employee name is ${this.name} and the salary is ${this.salary}`);
        
     }
}

let E1 = new Employee("harshit",2000000);
let E2 = new Employee("pratyush",350000);
let E3 = new Employee("kanish",400000);

E1.showDetails();
E2.showDetails();
E3.showDetails();
