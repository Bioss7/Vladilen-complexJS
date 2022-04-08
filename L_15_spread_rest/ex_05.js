const numbers = [1, 2, 3, 4, 5];

// const a = numbers[0];
// const b = numbers[1];

// ES6
const [a, b, ...other] = numbers;

console.log(a, b, other);

const person = {
    name: 'Max',
    age: 20, 
    city: 'Moscow',
    country: 'Russia'
}

const {name, age, ...address} = person;
console.log(name, age, address);