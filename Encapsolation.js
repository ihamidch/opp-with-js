class BankAccount 
{
    #balance; // this the variable that can not be accessible out of class meand encapsole

    constructor(balance) {
        this.#balance= balance
    }
    deposit(amount)
    {
        this.#balance += amount
    }
    Withdraw(amount)
    {
        if(amount <= this.#balance)
        {
            this.#balance-= amount
        }
        else
        {
            console.log("Amount unsufficient ");
        }
    }
    Getbalance()
    {
        return this.#balance
    }
}
const Account = new BankAccount(1000)
Account.deposit(8000)
console.log(Account.Getbalance());
Account.Withdraw(2000)
console.log(Account.Getbalance());

// this use to hide sensitive data like bank account number, password etc
// this is the way to hide the data from outside of class