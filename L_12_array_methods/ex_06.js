const people = [
    { name: 'Владилен', age: 25, budget: 40000 },
    { name: 'Елена', age: 17, budget: 3400 },
    { name: 'Игорь', age: 49, budget: 50000 },
    { name: 'Михаил', age: 15, budget: 1800 },
    { name: 'Василиса', age: 24, budget: 25000 },
    { name: 'Виктория', age: 38, budget: 2300 },
];

// Find
// Find служит чтобы по условию найти нужный элемент 
// Принимает callback функцию, где 1 параметр: итерируемый объект 
const igor = people.find(person => person.name === "Игорь");
console.log("name", igor);

// FindIndex
// Получаем index у объекта 
const igorIndex = people.findIndex(person => person.name === "Игорь");
console.log("name", igorIndex);
