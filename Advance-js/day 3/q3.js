
// SECTION 3: Constructor and Initialization
// 	7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.
// 	8.	Inside the constructor, store both values using this.
// 	9.	Add a method deposit(amount) that increases the balance.
// 	10.	Create two bank accounts and deposit money into only one.

class BankAccount {
    constructor(accountHolderName, balance) {
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }
}
// Create two bank accounts
let account1 = new BankAccount("Harshit", 5000);
let account2 = new BankAccount("Rahul", 3000);

// Deposit money into only one account
account1.deposit(2000);

// Output
console.log(account1.accountHolderName, account1.balance); // Harshit 7000
console.log(account2.accountHolderName, account2.balance); // Rahul 3000