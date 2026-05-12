//? getter
//? setter

//? access >> modify

class BankAccount2 {
   readonly userId: number;
    userName: string;
  protected userBalance: number;  //? private dile eita sudhu ei class er moddhe access kora jabe
//? protected dile ei class + eitar je kono childrern class e access kora jabe 
    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId
        this.userName = userName
        this.userBalance = userBalance
    }

   

    //* Using setter 
    set addingBalance(amount: number) {
        this.userBalance = this.userBalance + amount;
    }


    //? using getter

    get getBalance() {
       return this.userBalance
    }


}



const mezbaBhaiAccount2 = new BankAccount2(111, "Mezba", 3000);

//? calling setter 
mezbaBhaiAccount2.addingBalance = 300;


console.log(mezbaBhaiAccount2.getBalance);


