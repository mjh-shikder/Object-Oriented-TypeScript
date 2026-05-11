// ? oop: Instance of type guard/ type narrowing with instanceof oparetor

//* Instance mane Normal Object Jokhn ekta Class theke ekta object toiri kora hoy tokhon oi object ke bola hoy oi class er instance

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(hour: number) {
    console.log(`This Person name ${this.name} doinik ${hour} ghonta ghumay`);
  }
}

// ? Inheritance use koira person thika Student class define kora
class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(hour: number) {
    console.log(`This Student name ${this.name} doinik ${hour} study kore`);
  }
}

//? Inheritace use koira person this teacher class define kora
class Teacher1 extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(hour: number) {
    console.log(`This Teacher name ${this.name} doinik ${hour} class ney`);
  }
}

// ? Function Guard
const isStudent = (user: Person) => {
  return user instanceof Student; // user is Student
}

const isTeacher = (user: Person) => {
  return user instanceof Teacher1; // user is Teacher1
}

const getUserInfo2 = (user: Person) => {

  if (isStudent(user)) {
    user.doStudy(4)
  } else if (isTeacher(user)) {
    user.takeClass(6)
  } else {
    user.getSleep(8)
  }
}

  //------
const getUserInfoo = (user: Person) => {

  if (user instanceof Student) {
    user.doStudy(4)
  } else if (user instanceof Teacher1) {
    user.takeClass(6)
  } else {
    user.getSleep(8)
  }
    
}

//? Instance of Student and Teacher1 Class
const student1 = new Student('Rokon');
const teacher1 = new Teacher1('Khokon');
const person = new Person('Josmi')

getUserInfoo(student1)
getUserInfoo(teacher1)
getUserInfoo(person)