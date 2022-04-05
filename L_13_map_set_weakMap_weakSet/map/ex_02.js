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

// Map (Карта)
// Структура данных, ключами могут являться любые значения 

// const map = new Map([
//     ['key', 'value'],
//     ['Tom', 'Bruno']
// ]);

const map = new Map(entries);

// Получить ключ
console.log(obj.job);
console.log(map.get('job'));

// Установить новое значение 
map
    .set('NewField', 42)
    .set(obj, 'Value of object')
    .set(NaN, 'NaN ??')

// console.log(map.get(obj));    
console.log(map.get(NaN));    

console.log(map);

// Удаление по ключу 
map.delete('job'); // возвращает bool 
console.log(map.has('job')); // проверить ключ

console.log(map.size); // размер карты
map.clear(); // очистить карту 
console.log(map);
console.log(map.size); 
