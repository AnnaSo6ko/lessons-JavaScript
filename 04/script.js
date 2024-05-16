// Завдання 1
// Порівняння трьох чисел:
// Запитайте у користувача ввести три числа (ввести через prompt)
// Виведіть у консоль повідомлення про те, яке з введених чисел є найбільшим.

let firstNum = Number(prompt('Напишіть перше число'));
let secondNum = Number(prompt('Напишіть друге число'));
let thirdNum = Number(prompt('Напишіть третє число'));

if (firstNum>secondNum && firstNum>thirdNum) {
    console.log(`Найбільше написане число: ${firstNum}`);
}
else if (secondNum>firstNum && secondNum>thirdNum) {
    console.log(`Найбільше написане число: ${secondNum}`);
}
else {
    console.log(`Найбільше написане число: ${thirdNum}`);
};


// // Завдання 2 
// // Визначення сезону:
// // Запитайте у користувача ввести номер місяця (від 1 до 12).
// // Виведіть у консоль повідомлення про те, якому сезону належить введений місяць.


let numberMonth = prompt ('Напишіть номер місяця від 1 до 12');
let resultMonth = '';

if (numberMonth>0 && numberMonth<=2) {
    resultMonth = 'Вказаний місяць належить до зими';
    console.log(resultMonth);
}
else if (numberMonth==12) {
    resultMonth = 'Вказаний місяць належить до зими';
    console.log(resultMonth);
}
else if (numberMonth>=3 && numberMonth<=5) {
    resultMonth = 'Вказаний місяць належить до весни';
    console.log(resultMonth);
}
else if (numberMonth>=6 && numberMonth<=8) {
    resultMonth = 'Вказаний місяць належить до літа';
    console.log(resultMonth);
}
else if (numberMonth>=9 && numberMonth<=11) {
    resultMonth = 'Вказаний місяць належить до осені';
    console.log(resultMonth);
}
else {
    console.log('Не вірно написане число');
};


// // Завдання 3
// // Визначення розміру числа:
// // Запитайте у користувача ввести число.
// // Виведіть у консоль повідомлення про те, чи введене число є додатнім, від'ємним чи нулем.

let whatNum = Number(prompt('Напишіть будь-яке число'));

if (whatNum>0) {
    console.log(`Введене число - ${whatNum} є додатнім`);
}
else if (whatNum == 0) {
    console.log(`Введене число - ${whatNum} є нулем`);
}
else {
    console.log(`Введене число - ${whatNum} є від'ємним`);
};



// // Завдання 4
// // Перевірка величини кута:
// // Запитайте у користувача ввести величину кута в градусах.
// // Виведіть у консоль повідомлення про те, чи є величина кута гострою чи тупою ( це більше і менеше 90 градусів відповідно), використовуючи тернарний оператор.


let corner = Number(prompt('Напишіть величину кута в градусах'));
let valueCorner = 0;

valueCorner = corner <= 90 ? 'величина гострого кута' : 'величина тупого кута';
console.log(`${corner} ${valueCorner}`);


// Завдання 5
// Оцінка студента:
// Запитайте у користувача ввести свою оцінку за тест (від 0 до 100).
// Визначте, яку оцінку отримає студент (A, B, C, D або F) за таких умов:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// менше 60: F
// Збільште оцінку студента на одиницю, використовуючи постфіксний інкремент.
// Виведіть у консоль повідомлення про оцінку до і після інкремента та визначте за допомогою тернарного оператора, 
// чи студент зарахований чи ні (прохідний бал 60).

let numberStudent = Number(prompt('Введіть свою оцінку від 0 до 100:'));
let resultStudent;

if (numberStudent >= 90 && numberStudent <= 100) {
    console.log('Ваша група за оцінкою - А.');
}
else if (numberStudent >= 80 && numberStudent <= 89) {
    console.log('Ваша група за оцінкою - B.');
}
else if (numberStudent >= 70 && numberStudent <= 79) {
    console.log('Ваша група за оцінкою - C.');
}
else if (numberStudent >= 60 && numberStudent <= 69) {
    console.log('Ваша група за оцінкою - D.');
}
else if (numberStudent < 60) {
    console.log('Ваша група за оцінкою - F.');
}
else {
    console.log('Не правильно вказана оцінка.');
};

console.log(`Ваша оцінка до інкремента - ${numberStudent++}.`);
console.log(`Ваша оцінка після інкремента - ${numberStudent}.`);

resultStudent = numberStudent>=60 ? 'Ви зараховані до навчання, прохідний бал 60!' : 'Ви не зараховані до навчання, прохідний бал 60!';
console.log(`${resultStudent} Bаш бал - ${numberStudent}.`);