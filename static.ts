//* static

class Counter {
   static count: number = 0;

   static increment() {
        return (Counter.count = Counter.count + 1);
    }

  static decrement() {
        return (Counter.count = Counter.count - 1);
    }
   
}

const instance1 = new Counter()

 // ? witout static
// console.log(instance1.increment()); // 1    // 1
// console.log(instance1.increment()); // 2    // 2
// console.log(instance1.increment()); // 3    // 3
// console.log(instance1.increment()); // 4    // 4


// const instance2 = new Counter()

// console.log(instance2.increment()); // 1    // 5
// console.log(instance2.increment()); // 2    // 6
// console.log(instance2.increment()); // 3    // 7

// const instance3 = new Counter();

// console.log(instance3.increment()); // 8   asfter adding static
// console.log(instance3.increment()); // 9
// console.log(instance3.increment()); // 10


// console.log(instance3.decrement()); // 9

// console.log(instance3.increment()); // 10

//* Method gula static korar pore ar instance toiri kora lagbe na
//? tokhon just Counter.increment / Counter.decrement diya access kora jabe

console.log(Counter.increment()); // 1
console.log(Counter.increment()); // 2
console.log(Counter.increment()); // 3

console.log(Counter.decrement()); // 2
