// ? OOP - Class - Object

class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
        this.name = name
        this.species = species
        this.sound = sound
    }

    makeSound() {
       // console.log(`The animal is making sound`)
        console.log(`${this.name} is making sound ${this.sound}`)
        
    }
}

//* Create a dog object with Animal Class
const dog = new Animal('dogesh', 'kutta', 'bawrk')

console.log(dog.name);

//* Create a cat object with Animal class

const cat = new Animal('belai', 'cat', 'mew')

const crow = new Animal('kaua', 'bird', 'ka ka')

crow.makeSound()


// ? Parameter Properties
class Animal2 {

    constructor(public name: string, public species: string, public sound: string) {

  }

  makeSound() {
    // console.log(`The animal is making sound`)
    console.log(`${this.name} is making sound ${this.sound}`);
  }
}

const tiger = new Animal2('Tiger', 'bagh', 'gorjon')

tiger.makeSound()
