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

console.log("Получаем массив: ");
for(let entry of map.entries()) {
    console.log(entry);
}
console.log("Получаем отдельные переменные: ");
// Если делаем итерацию по карте, метод entries необязателен 
for(let [key, value] of map) {
    console.log(key, value);
}