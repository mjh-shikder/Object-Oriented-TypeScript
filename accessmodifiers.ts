//? access >> modify

class BankAccount {
   readonly userId: number;
    userName: string;
  protected userBalance: number;  //? private dile eita sudhu ei class er moddhe access kora jabe
//? protected dile ei class + eitar je kono childrern class e access kora jabe 
    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId
        this.userName = userName
        this.userBalance = userBalance
    }

    addBalance(balance: number) {
        this.userBalance = this.userBalance + balance;
    }

}


///
class StudentBankAccount extends BankAccount{
    test() {
        this.userBalance
    }
}


const mezbaBhaiAccount = new BankAccount(111, 'Mezba', 3000);

mezbaBhaiAccount.addBalance(1)

console.log(mezbaBhaiAccount);
