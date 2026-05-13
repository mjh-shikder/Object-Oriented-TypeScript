//? access >> modify

class BankAccount3 {
  public readonly userId: number;
  public userName: string;
  private userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

 private addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
    }
    
    callPrivateMethod(balance: number) {
        this.addBalance(balance)
    }
}

///
class StudentBankAccount2 extends BankAccount {
  test() {
    this.userBalance;
  }
}

const mezbaBhaiAccount3 = new BankAccount3(111, "Mezba", 3000);

mezbaBhaiAccount3.callPrivateMethod(6)