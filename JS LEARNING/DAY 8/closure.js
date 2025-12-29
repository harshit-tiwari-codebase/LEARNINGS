//closure is used A closure is created when a function remembers and continues to access variables from its lexical (outer) scope even after the outer function has finished execution.


function createWallet(initialBalance) {
  let balance = initialBalance;   // private data (hidden)

  function deposit(amount) {
    if (typeof amount === "number" && amount > 0) {
      balance += amount;
      return balance;
    }
  }

  function withdraw(amount) {
    if (typeof amount === "number" && amount > 0 && amount <= balance) {
      balance -= amount;
      return balance;
    }
  }

  function getBalance() {
    return balance;
  }

  return {
    deposit,
    withdraw,
    getBalance
  };
}
const user = createWallet(500);

user.deposit(200);   
user.withdraw(300);   
user.getBalance();    
