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

console.log("Получаем значение: ");
for(let val of map.values()) {
    console.log("val", val);
}

console.log("Получаем ключи: ");
for(let val of map.keys()) {
    console.log("val", val);
}