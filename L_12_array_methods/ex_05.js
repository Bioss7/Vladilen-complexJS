const people = [
    { name: 'Владилен', age: 25, budget: 40000 },
    { name: 'Елена', age: 17, budget: 3400 },
    { name: 'Игорь', age: 49, budget: 50000 },
    { name: 'Михаил', age: 15, budget: 1800 },
    { name: 'Василиса', age: 24, budget: 25000 },
    { name: 'Виктория', age: 38, budget: 2300 },
];

// Reduce 
// Получить финальное значение, совершив итерацию по какому-то массиву

// let amount = 0;
// for(let i = 0; i < people.length; i++){
//     amount += people[i].budget;
// }
// console.log("amount", amount);

// Reduce принимает 2 параметра:
// 1: callback принимает 2 параметра: 1: total, 2: итерируемый элемент у массива
// 2: начальное значение которое будет присвоено total

// const amount = people.reduce((total, person) => {
//     return total + person.budget;
// }, 0);
// console.log("amount", amount);

const amount = people.reduce((total, person) => total + person.budget, 0);
console.log("amount", amount);