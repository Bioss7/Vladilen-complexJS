let obj = {name: 'weakmap'};

// В структуре WeakMap ключами могут быть только объекты 
const map = new WeakMap([
    [obj, 'obj data']
]);

obj = null; // Объект был удален в map

console.log(map); 

// Есть методы get set delete has
// Проверка ключа
console.log(map.has(obj)); // false
console.log(map.get(obj)); // undefined
