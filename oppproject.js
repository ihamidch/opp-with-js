class BankAccount
{
    constructor(accountNo, accountHolderName, accountBalance)
    {
        this.accountNo = accountNo;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
    }
    getAccountBalance()
    {
        return this.accountBalance;
    }
    deposit(amount)
    {
        this.accountBalance += amount;
    }
    withdraw(amount)
    {
        if(amount <= this.accountBalance)
        {
            this.accountBalance -= amount;
        }
        else
        {
            console.log("Insufficient balance");
        }
    }
    getAccountDetails()
    {
        return `Account No: ${this.accountNo}, Account Holder Name: ${this.accountHolderName}, Account Balance: ${this.accountBalance}`;
    }
}
class SavingAccount extends BankAccount
{
    constructor(accountNo, accountHolderName, accountBalance, interestRate)
    {
        super(accountNo, accountHolderName, accountBalance);
        this.interestRate = interestRate;
    }
    calculateInterest()
    {
        return this.accountBalance * this.interestRate / 100;// this is the way to calculate the interest
        //calculate interest example 1000 * 5 / 100 = 50
    }
}
class CheckingAccount extends BankAccount
{
    constructor(accountNo, accountHolderName, accountBalance, minimumBalance)
    {
        super(accountNo, accountHolderName, accountBalance);
        this.minimumBalance = minimumBalance;
    }
    withdraw(amount)
    {
        if(this.accountBalance - amount >= this.minimumBalance)
        {
            this.accountBalance -= amount;
        }
        else
        {
            console.log("Minimum balance should be maintained");
        }
    }//when we use withdraw again it will override the withdraw method of BankAccount
}
class Bank {
    constructor() {
        this.accounts = [];
    }
    addAccount(account) {
        this.accounts.push(account);
    }
  findAccount(accountNo) {
        return this.accounts.find(account => account.accountNo === accountNo);
    }
    transferAmount(fromAccountNo, toAccountNo, amount) {
        const fromAccount = this.findAccount(fromAccountNo);
        const toAccount = this.findAccount(toAccountNo);
        if(fromAccount && toAccount) {
            fromAccount.withdraw(amount);
            toAccount.deposit(amount);
            console.log(`Amount ${amount} transferred from Account No: ${fromAccountNo} to Account No: ${toAccountNo}`);
        }
        else {
            console.log("Account not found");
        }
    }
    
}
const savingAccount = new SavingAccount(101, "John", 1000, 5);
const checkingAccount = new CheckingAccount(102, "Jane", 2000, 500);
const bank = new Bank();
bank.addAccount(savingAccount);
bank.addAccount(checkingAccount);
console.log(savingAccount.calculateInterest());
console.log(checkingAccount.getAccountDetails());
bank.transferAmount(101, 102, 500);
console.log(savingAccount.getAccountDetails());
console.log(checkingAccount.getAccountDetails());
