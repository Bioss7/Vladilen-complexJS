// Objects
const person = {
    name: 'Max',
    age: 20,
    address: {
        country: 'Russia',
        city: 'Moscow'
    }
}

// const name = person.name;
// const {
//     name: firstName = 'Без имени', 
//     age, 
//     car = 'Машины нет',
//     address: {city: homeTown, country}
// } = person;

// console.log(firstName, age, car, homeTown, country);

// Rest
const {name, ...info} = person;
console.log(name, info);

