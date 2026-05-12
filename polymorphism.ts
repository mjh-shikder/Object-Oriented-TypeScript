// * polymorphism : bouhurupi

class Person1{

    getSleep() {
        console.log(`I am a normal Happy person sleep for 8 hours`);
        
    }
}

class Studet extends Person1 {
    getSleep() {
        console.log(`I am a student and I sleep for 7 hours`);
        
    }
}

class NextLevelDeveloper extends Person1 {
    getSleep() {
        console.log(`I am a Next Level Developer sleep for 6 hours`);
    }
}


//----- ---- -----

const getSleepingHours = (param: Person1) => {
    param.getSleep()
}

const person1 = new Person1()
const person2 = new Studet()
const person3 = new NextLevelDeveloper()

getSleepingHours(person1)
getSleepingHours(person2)
getSleepingHours(person3)


//* Example 2
class Shape {
    getArea(): number {
        return 0;
    }
}

class Cirecle extends Shape{
    // area = pi *r * r

    radius: number;

    constructor(radius: number) {
        super()
        this.radius = radius
    }

    getArea(): number {
        return Math.PI*this.radius * this.radius
    }
}

class Rectangle extends Shape{
    // area = height * width

    height: number;
    width: number;

    constructor(height: number, width: number) {
        super()
        this.height = height
        this.width = width
    }

    getArea(): number {
        return this.height * this.width;
    }
}


// ----

const shpae1 = new Shape()
const shpae2 = new Cirecle(3)
const shpae3 = new Rectangle(4, 9)



const getArea = (param: Shape) => {
   console.log(param.getArea());
    
}

getArea(shpae1) // 0
getArea(shpae2) // 28.274333882308138
getArea(shpae3) // 36