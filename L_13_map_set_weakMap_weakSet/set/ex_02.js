const set = new Set([1, 2, 3, 3, 4, 5, 5, 6]);

set.add(10).add(20).add(30).add(20);

// Одно и тоже, методы для set нужны для совместимости с map
console.log(set.values());
console.log(set.keys());

// Ключ и значение дублируются 
// console.log(set.entries());

// Ключи и значения
for(let key of set) {
    console.log(key);
}