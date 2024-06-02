// 1. Калькулятор 
// Створіть функції для кожної математичної операції (функція суми створена на уроці). 
// Використовуючи switch напишіть програму яка отримує знак математичної операції (+, -, /, *) 
// та 2 значення і запускає функцію для цієї математичної операції з 2 цифровими значеннями

console.log ('=== Завдання 1 ===');

let a = Number(prompt('Введіть перше число'));
let operation = prompt('Введіть тип операції (+, -, /, *');
let b = Number(prompt('Введіть друге число'));

function sumAdding(a,b) {
    return a+b;
}

function sumSubtracting(a,b) {
    return a-b;
}

function sumMultiplying(a,b) {
    return a*b;
}

function sumDividing(a,b) {
   if (b == 0) {
    return 'Ділити на 0 не можна'
   }
   else {
    return a/b; 
   }  
}

switch (operation) {
    case '+':
        console.log (`Результат ${a}+${b} = ${sumAdding(a,b)}`)
        break;
    case '-':
        console.log (`Результат ${a}-${b} = ${sumSubtracting(a,b)}`)
        break; 
    case '*':
        console.log (`Результат ${a}*${b} = ${sumMultiplying(a,b)}`)
        break;
    case '/':
        console.log (`Результат ${a}/${b} = ${sumDividing(a,b)}`)
        break;   
    default :
        console.log ('Некоректно введені значення');
        break;    
}


// 2. Параметри та колбеки:
// Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console 
// ('Вітаю ${user}'), і викликає цю функцію для кожного елемента масиву.

console.log ('=== Завдання 2 ===');

let newArr = ['Tom','Nick','Ivan'];

function hiUser (user) {
    console.log(`Вітаю ${user}`);
}

function wellcomUser (arr, func) {
    for (let i=0; i<arr.length; i++) {
        func(arr[i]);
    }
}

wellcomUser(newArr,hiUser);

// 3. Стрілкові функції:
// Перепишіть попередню функцію в стрілкову

console.log ('=== Завдання 3 ===');

let wellcomUserTwo = (arrT, funcT) => {
    for (let i=0; i<arrT.length; i++) {
        funcT(arrT[i]);
    }
}

wellcomUserTwo (newArr,hiUser);


// 4. Параметри за замовчуванням:
// Створіть функцію, яка приймає параметр зі значенням за замовчуванням і виводить його.

console.log ('=== Завдання 4 ===');

function funcName (name, hello) {
    if (hello === undefined) {
      hello = 'Привет';
    }
   
    console.log(`${hello}, ${name}`);
}
funcName('Anna');

// 5. Задача з колбеком:
// Створіть функцію, яка приймає стрінг значення і функцію-колбек, і 
// викликає цю функцію-колбек, передаючи їй стрінг значення

console.log ('=== Завдання 5 ===');

let stringN = 'string name';

function stringFunc () {
    console.log(stringN);
}

function noName (str, callfunc) {
    callfunc (str);
}

noName (stringN, stringFunc);


// 6. Перепишіть стрілкову функцію в звичайну 
// const multiplyValues = (a, b, c) => a * b * c;

console.log ('=== Завдання 6 ===');

function multiplyValues (a,b,c) {
    return a * b * c;
}

console.log(`Result a*b*c : ${multiplyValues(10,5,3)}`);