const people = [
    { name: 'Владилен', age: 25, budget: 40000 },
    { name: 'Елена', age: 17, budget: 3400 },
    { name: 'Игорь', age: 49, budget: 50000 },
    { name: 'Михаил', age: 15, budget: 1800 },
    { name: 'Василиса', age: 24, budget: 25000 },
    { name: 'Виктория', age: 38, budget: 2300 },
];

// Filter
// Фильтрация по условию исходного массива

// const adults = [];
// for(let i = 0; i < people.length; i++){
//     if(people[i].age > 18) {
//         adults.push(people[i]);
//     }
// }
// console.log(adults);

// Filter принимает 3 параметра: 
// 1: сам элемент по которому делаем итерацию,
// 2: индекс
// 3: сам массив 

// const adults = people.filter(person => {
//     if(person.age >= 18){
//         return true;
//     }
// });

const adults = people.filter(person => person.age >= 18);

console.log(adults);