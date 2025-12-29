function atmMachine(operation) {
  console.log("Card inserted");
  operation();
}

function withdraw() {
  console.log("Cash withdrawn 💸");
}

function checkBalance() {
  console.log("Balance is ₹10,000");
}

function deposit() {
  console.log("Money deposited 💰");
}

atmMachine(withdraw);
atmMachine(checkBalance);
atmMachine(deposit);
