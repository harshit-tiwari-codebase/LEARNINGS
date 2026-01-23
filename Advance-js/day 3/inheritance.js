// Parent class: Generic Bank Account
class BankAccount {
    constructor() {
        this.accountType = "Savings";   // default account type
        this.withdrawLimit = 20000;     // default daily limit
    }

    deposit() {
        console.log("Money deposited");
    }

    withdraw() {
        console.log("Money withdrawn");
    }
}

// Child class: Current Account (Business Account)
class CurrentAccount extends BankAccount {
    constructor() {
        super();                     // initialize parent account first
        this.accountType = "Current";
        this.withdrawLimit = 100000; // higher limit for business users
    }
}

// Real-world object
let acc1 = new CurrentAccount();
console.log(acc1 , acc1.withdraw());
