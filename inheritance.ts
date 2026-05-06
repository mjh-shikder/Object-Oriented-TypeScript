// ? inheritance


class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(numOfHours: number) {
    console.log(`${this.name} ${numOfHours} ghonta ghumay`);
  }
}


// ? Student class using Parent class
class Studen extends Parent{
    rollNo: number;
    constructor(name: string, age: number, address: string, rollNo: number) {
        super(name, age, address)

        this.rollNo = rollNo
    }
}


const studen1 = new Studen("jony", 21, "dhaka, bangladesh",6);

studen1.getSleep(34)

// ? Teacher Class with Parent class

class Teacher extends Parent {
 
  designation: string;

  constructor( name:string, age:number, address: string, designation: string) {
      super(name, age, address)
   
    this.designation = designation;
  }

    takeClass(num: number) {
        console.log(`${this.name} Saar ${num} ghonta Class ney`);    
    }
}


const teacher1 = new Teacher('Jamal', 40, 'dhaka', 'math')

teacher1.takeClass(4)
