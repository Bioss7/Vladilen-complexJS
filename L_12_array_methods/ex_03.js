const people = [
    { name: 'Владилен', age: 25, budget: 40000 },
    { name: 'Елена', age: 17, budget: 3400 },
    { name: 'Игорь', age: 49, budget: 50000 },
    { name: 'Михаил', age: 15, budget: 1800 },
    { name: 'Василиса', age: 24, budget: 25000 },
    { name: 'Виктория', age: 38, budget: 2300 },
];

// Map 
// Работает схожим образом с forEach, принимает ровно те же самые параметры
// 1 параметр каждый объект данного массива, 2 параметр индекс, 3 сам массив 
// Метод Map создает новые массивы и как результат заносит в новую переменную

// const newPeople = people.map(person => {
//     // return person;
//     // Для каждого объекта массива people мы будем преобразовать в новую строчку Hello
//     // return 'Hello';
//     // return person.name;
//     return `${person.name} (${person.age})`;
// });

// const newPeople = people.map(person => `${person.name} (${person.age})`);
// console.log("newPeople", newPeople);

const newPeople = people.map(person => person.age * 3);
console.log("newPeople", newPeople);
