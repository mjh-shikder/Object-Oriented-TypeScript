// ? Type Guard

// * in typeof

const add = (num1: number, num2: number) => num1 + num2;

add(2, 2) //4
// ? add('3', 3) ami cacchi dibe 33

type Alphaneumeric = number | string;

const add2 = (num1: Alphaneumeric, num2: Alphaneumeric)=> {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else {
       return  num1.toString() + num2.toString()
    }
}

console.log(add2('4', '4')); // 44
console.log(add2(4, '4')); // 44
console.log(add2('5', 5)); // 55


// ? In Guard 
type NormalUser = { 
    name: string;
}

type AdminUser = {
    name: string;
    role: 'Admin';
}

const getUserInfo = (user: NormalUser | AdminUser) =>
{
    if ('role' in user) {
       console.log(`He is ${user.name} and his role is ${user.role}`);
       
    } else {
        console.log(`He is ${user.name} User `);    
   }  
}
getUserInfo({ name: "Josim" }) // He is Josim User
getUserInfo({ name: "Josim", role: 'Admin' }) // He is Josim and his role is Admin

 