function bankAccount(initialBalance = 0) {
  let balance = initialBalance; 

  return {
    deposit: function (amount) {
      if (amount > 0) {
        balance += amount;
        console.log(`Deposited: ₹${amount}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    },

    withdraw: function (amount) {
      if (amount <= 0) {
        console.log("Withdrawal amount must be positive.");
      } else if (amount > balance) {
        console.log("Insufficient funds!");
      } else {
        balance -= amount;
        console.log(`Withdrew: ₹${amount}`);
      }
    },

    getBalance: function () {
      return balance;
    },

    reset: function () {
      balance = initialBalance;
      console.log("Account reset to initial balance.");
    }
  };
}


const myAccount = bankAccount(1000);

console.log("Current Balance:", myAccount.getBalance()); 
myAccount.deposit(500);   
console.log("Balance:", myAccount.getBalance()); 
myAccount.withdraw(2000); 
myAccount.withdraw(800);  
console.log("Balance:", myAccount.getBalance()); 
myAccount.reset();        
console.log("Balance:", myAccount.getBalance()); 
