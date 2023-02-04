// Задание 1

const returnMin = (a, b) => a < b ? a : b;

console.log(returnMin(8, 4))
console.log(returnMin(6, 6))

// ЗАДАНИЕ 2

const Even = (number) => {
    if (isNaN(number)) {
        return ('Ввели не число');
    }
    if (number % 2) {
        return ('Нечетное');
    }
    return ('Четное');
}
console.log(Even('qwrw'));
console.log(Even(15));
console.log(Even(-3));
console.log(Even(6));

// Задание 3 - 3.1

const square = (num) => console.log(num ** 2);

let a = 6;
square(a);


// ЗАДАНИЕ 3.2
const returnSquare = (num) => num ** 2;


// Задание 4


const sayHello = () => {
    let userAge = prompt('Сколько Вам лет?');
    if (isNaN(userAge) || userAge < 0 || userAge === null) {
        console.log('Вы ввели неправильное значение');
    }
    else if (userAge <= 12) {
        console.log('Привет, друг!');
    }
    else {
        console.log('Добро пожаловать!')
    }
}
sayHello();


// Задание 5

const multiply = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a / b;
    }
}
console.log(multiply(5, 10));
console.log(multiply('5', 10));
console.log(multiply('6', '24'));
console.log(multiply('qwrewr', 6));
console.log(multiply('qwrq', 'asfdqw'));



// Задание 6

const cubeCheck = () => {
    let a = prompt('Введите число', 0);
    if (isNaN(a) || a === null) return 'Переданный параметр не является числом';
    return `${a} в кубе равняется ${a ** 3}`;
}
console.log(cubeCheck());

// Проверка
// const toCube = (a) => {
//     if (isNaN(a) || a === null) return 'Переданный параметр не является числом';
//     return `${a} в кубе равняется ${a ** 3}`;
// }
// for (let i = 0; i <= 10; i++) {
//     console.log(toCube(i));
// }



