const obj = {
    name: 'Vladilen',
    age: 26, 
    job: 'Fullstack'
}

const entries = [
    ['name', 'Vladilen'],
    ['age', 26],
    ['job', 'Fullstack']
];

const map = new Map(entries);

map
    .set('NewField', 42)
    .set(obj, 'Value of object')
    .set(NaN, 'NaN ??');

// Из карты делать массивы
console.log("Оператор Spread: ");
const array = [...map];
// Массив состоящий из значения карты
console.log(array);

console.log("Метод Array.from: ");
const array1 = Array.from(map);
console.log(array1);