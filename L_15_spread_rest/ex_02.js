// Practice
const numbers = [5, 37, 42, 17];
console.log(Math.max(5, 35, 42, 17)); // стркоа
console.log(Math.max(...numbers)); // получили строку из массива
// как было раньше
console.log((Math.max.apply(null, numbers)));