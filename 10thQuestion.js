// Q. Create an object called bankAccount with properties like accountNumber, balance and holderName  Write function to deposit and withdraw money from the account.

var bankAccount = {
  accountnumber: 8746526592952,
  balance: 10000,
  holderName: "Sourav Debnath",
  deposit: function (Amount) {
    this.balance = this.balance + Amount;
    return;
  },
  withdraw: function (Amount) {
    this.balance = this.balance - Amount;
    return;
  },
};

console.log(bankAccount.deposit(10000));
console.log(bankAccount);
