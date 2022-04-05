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

// Объект из карты
const mapObj = Object.fromEntries(map.entries());
console.log("mapObj: ", mapObj);