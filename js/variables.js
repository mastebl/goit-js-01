console.log('variables');

console.log(student); //undefined

var student = 'Max';
console.log(student);

var count; //обьявление переменной без иницилизации
console.log(count);// undefined

count = 1;
console.log(count); // 1
count = 2;
console.log(count); // 2

// console.log(number); // Cannot access 'number' before initialization
let number = 30;
console.log(number);

let age; // обьявление переменной без иницилизации
console.log(age); // undefined
age = 18;
console.log(age); // 18
age = 20;
console.log(age); // 20

// console.log(userName); // annot access 'userName' before initialization
const userName = 'Nika';
console.log(userName);
// userName = 'Vova'; // Assignment to constant variable.

// const user;
// console.log(user); // Missing initializer in const declaration
