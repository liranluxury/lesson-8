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
  distance() {
    return this.y - this.x;
  }
}

let point1 = new Point(1, 2);
let point2 = new Point(3, 4);
console.log(point1.add());
console.log(point2.add());
console.log(point2.add(point1));
console.log(point1.subtract());
console.log(point1.distance());
//********************************** */
// 3)Function: findMinimumNumber

// Input: [5, 2, 9, 1]
// Output: 1
// Description: Найти минимальное число в массиве.
function findMinimumNumber(arr) {
  arr.sort((a, b) => a - b);
  return arr[0];
}
const arr2 = [5, 2, 9, 1];
console.log(findMinimumNumber(arr2));
//********************************** */
// 1. Расчёт разницы во времени (calculateTimeDifference):
// 4) Назначение: Написать функцию, которая принимает в качестве аргумента дату и вычисляет, сколько времени прошло с этой даты до настоящего момента.
// Пример: calculateTimeDifference(new Date(2023, 11, 20)); возвращает "2 дня назад", если текущий день 22 декабря 2023 года.
// Подсказки: Используйте объект Date для работы с датами и его методы getTime() для получения времени в миллисекундах и toLocaleString() для форматирования разницы во времени.
const needDate = new Date();
const needTime = needDate.getTime();
const formatTime = needTime.toLocaleString();
console.log(needDate);
console.log(needTime);
console.log(formatTime);
function calculateTimeDifference(needData, currentDade) {
  let time = currentDade - needData;
}
//********************************** */
// 5) Определение високосного года (isLeapYear):

// Назначение: Написать функцию, которая принимает год в качестве аргумента и определяет, является ли он високосным.
// Пример: isLeapYear(2024); возвращает true.
// Подсказки: Вспомните правило определения високосных годов (делится на 4, но не на 100, или делится на 400).
//********************************** */
// 6). Отображение времени в разных часовых поясах:

// Назначение: Создать приложение, которое показывает текущее время в нескольких городах с разными часовыми поясами.
// Подсказки: Используйте объект Date для получения текущего времени и объект Intl.DateTimeFormat для форматирования времени в соответствии с указанным часовым поясом.
//********************************** */
//********************************** */
