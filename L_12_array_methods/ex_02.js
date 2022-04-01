const people = [
    { name: 'Владилен', age: 25, budget: 40000 },
    { name: 'Елена', age: 17, budget: 3400 },
    { name: 'Игорь', age: 49, budget: 50000 },
    { name: 'Михаил', age: 15, budget: 1800 },
    { name: 'Василиса', age: 24, budget: 25000 },
    { name: 'Виктория', age: 38, budget: 2300 },
];

// ForEach
// Итерация для каждого элемента. Параметр принимает функцию с 3 параметрами:
// 1 параметр объет каждый объект данного массива, 2 параметр индекс, 3 сам массив 

// people.forEach(function(person, index, pArr){
//     console.log("person", person);
//     console.log("index", index);
//     console.log("pArr", pArr);
// });

// ES6
people.forEach(person => console.log(person));
