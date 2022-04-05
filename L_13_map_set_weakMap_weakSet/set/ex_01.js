const set = new Set([1, 2, 3, 3, 4, 5, 5, 6]);

// Без дубликатов, уникальное состояние 
set.add(10).add(20).add(30).add(20);

console.log(set);
console.log(set.has(30)); // true
console.log(set.has(42)); // false
console.log(set.size); 
console.log(set.delete(1)); 
console.log(set.size); 
console.log(set.clear()); 
console.log(set.size); 