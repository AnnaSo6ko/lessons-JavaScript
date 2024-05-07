// Завдання 1
// Створіть змінні number1 та number2 і використайте оператори порівняння, щоб визначити, чи вони рівні.
// Виведіть результат за допомогою alert, щоб повідомити користувача про те, чи рівні числа.

let number1 = 5;
let number2 = 2;

let resultNumber = number1 == number2;

alert(`Result: ${resultNumber}`);

// Завдання 2
// Використовуючи prompt, запросіть у користувача введення числа.
// Перевірте, чи введене число парне чи непарне.
// Виведіть результат з використанням console.log.

let a = Number(prompt('Type your value :'));

let resultA = a % 2 === 0;

console.log (resultA);

// Завдання 3
// Використовуючи prompt, запитайте у користувача його вік.
// Перевірте, чи вік менше 18 років.
// Виведіть відповідне повідомлення про те, чи може користувач використовувати певний ресурс.   
// (не знаю як реалізувати без if/else)

let whatAge = Number(prompt('What your age?'));

if (whatAge >= 18) {
    alert (`you can use site , because your age ${whatAge}`);
} else {
    alert (`you can't use site , because your age ${whatAge}`);
};

// Завдання 4
// Створіть змінну ціна та кількість товару і присвойте їм значення використовуючи prompt .
// Використовуйте математичні операції для обчислення вартості товару (ціна * кількість).
// Виведіть результат за допомогою console.log.

let price = Number(prompt('Please write price :'));
let sum = Number(prompt('Write the quantity of the product :'));
let resultPrice = price * sum;

console.log (`Your price = ${resultPrice}`);

// Завдання 5
// Використовуючи prompt, запросіть в користувача вартість товару.
// Розрахуйте знижку на товар у розмірі 50% від введеної вартості.
// Виведіть результат знижки за допомогою alert.

let cena = Number(prompt('Вкажіть вартість товару :'));

let discount = cena / 100 * 50; 

alert(`Ціна з урахуванням знижки в 50% = ${discount}`);