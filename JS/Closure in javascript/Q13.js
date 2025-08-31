function createBankAccount(initialBalance) {
    let balance = initialBalance; 

    return {
        deposit: function (amount) {
            if (amount > 0) {
                balance += amount;
                console.log(`Deposited: ₹${amount}`);
            } else {
                console.log("Deposit amount must be greater than 0");
            }
        },
        withdraw: function (amount) {
            if (amount > balance) {
                console.log("Insufficient funds");
            } else if (amount > 0) {
                balance -= amount;
                console.log(`Withdrew: ₹${amount}`);
            } else {
                console.log("Withdrawal amount must be greater than 0");
            }
        },
        getBalance: function () {
            return balance;
        }
    };
}


const myAccount = createBankAccount(1000); 

myAccount.deposit(500);   
myAccount.withdraw(300);   
console.log(myAccount.getBalance()); // Output: 1200

console.log(myAccount.balance); 
