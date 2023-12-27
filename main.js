"use strict";

// 1) Задача: Напишите функцию groupByFirstLetter, которая принимает массив строк и возвращает объект, где ключами являются первые буквы каждой строки, а значениями - массивы соответствующих строк.

// Вход: ["apple", "banana", "cherry", "dog", "elephant"]
// Вывод: { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["dog"], e: ["elephant"] }
const arr = ["apple", "banana", "cherry", "dog", "elephant"];
function groupByFirstLetter(arr) {
  const newGroup = {};
  for (let item of arr) {
    const key = item.charAt(0);
    if (!newGroup[key]) {
      newGroup[key] = [];
    }

    newGroup[key].push(item);
  }
  return newGroup;
}
console.log(groupByFirstLetter(arr));

// можно прочитать главу 7 в книге про классы в javascript

//********************************** */
// 2) Задача: Создайте класс Point с полями x и y и методами add, subtract, и distance.

// Вход: const point1 = new Point(1, 2); const point2 = new Point(3, 4); point1.add(point2);
// Вывод: { x: 4, y: 6 } (новая точка, являющаяся суммой point1 и point2)
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add() {
    return this.x + this.y;
  }
  subtract() {
    return this.x - this.y;
  }
  distance(a) {
    const dx = this.x - a.x;
    const dy = this.y - a.y;

    return Math.sqrt(dx ** 2 + dy ** 2);
  }
}

let point1 = new Point(1, 2);
let point2 = new Point(3, 4);

console.log(point1.add());
console.log(point2.add());
console.log(point2.add(point1));
console.log(point1.subtract());
console.log(point1.distance(point2));
//********************************** */
// 3)Function: findMinimumNumber

// Input: [5, 2, 9, 1]
// Output: 1
// Description: Найти минимальное число в массиве.
function findMinimumNumber(arr) {
  arr.sort((a, b) => a - b);
  return arr[0];
}
const arr2 = [5, 2, 9, 1, -5];
console.log(findMinimumNumber(arr2));
function findMinimumNumber2(arr) {
  let min = Infinity;
  arr.forEach((value) => {
    if (value < min) {
      min = value;
    }
  });
  console.log(min);
}
findMinimumNumber2(arr2);
//********************************** */
// 1. Расчёт разницы во времени (calculateTimeDifference):
// 4) Назначение: Написать функцию, которая принимает в качестве аргумента дату и вычисляет, сколько времени прошло с этой даты до настоящего момента.
// Пример: calculateTimeDifference(new Date(2023, 12, 20)); возвращает "2 дня назад", если текущий день 22 декабря 2023 года.
// Подсказки: Используйте объект Date для работы с датами и его методы getTime() для получения времени в миллисекундах и toLocaleString() для форматирования разницы во времени.

function calculateTimeDifference(needData) {
  const currentDate = new Date();
  const difference = currentDate.getTime() - needData.getTime();
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  let daysDifference = Math.floor(difference / millisecondsPerDay);
  if (daysDifference === 0) {
    return "today";
  } else if (daysDifference === 1) {
    return "yesterday";
  } else if (daysDifference === -1) {
    return "tomorrow";
  } else if (daysDifference > 0) {
    return `${daysDifference} days ago`;
  } else {
    return `${daysDifference} days in advance`;
  }
}
let result = calculateTimeDifference(new Date(2023, 11, 20));
console.log(result);
//********************************** */
// 5) Определение високосного года (isLeapYear):

// Назначение: Написать функцию, которая принимает год в качестве аргумента и определяет, является ли он високосным.
// Пример: isLeapYear(2024); возвращает true.
// Подсказки: Вспомните правило определения високосных годов (делится на 4, но не на 100, или делится на 400).
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    return `year ${year} is a leap year `;
  } else {
    return `year ${year} is not a leap year `;
  }
}
console.log(isLeapYear(2023));
console.log(isLeapYear(2024));
//********************************** */
// 6). Отображение времени в разных часовых поясах:

// Назначение: Создать приложение, которое показывает текущее время в нескольких городах с разными часовыми поясами.
// Подсказки: Используйте объект Date для получения текущего времени и объект Intl.DateTimeFormat для форматирования времени в соответствии с указанным часовым поясом.
function displayTime() {
  const date = new Date();
  console.log(
    new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeStyle: "long",
      timeZone: "UTC",
    }).format(date)
  );
  console.log(
    new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeStyle: "long",
      timeZone: "America/New_York",
    }).format(date)
  );

  console.log(
    new Intl.DateTimeFormat("ru", {
      dateStyle: "full",
      timeStyle: "long",
      timeZone: "Europe/Paris",
    }).format(date)
  );
  console.log(
    new Intl.DateTimeFormat("en-GB", {
      dateStyle: "full",
      timeStyle: "long",
      timeZone: "Australia/Sydney",
    }).format(date)
  );
}
displayTime();
//********************************** */
