const object = {
    name: 'Max',
    age: 20
}

console.log(object.toString());
localStorage.setItem('person', JSON.stringify(object)); // строка string

const raw = localStorage.getItem('person');
const person = JSON.parse(raw);
person.name = 'Vladilen';
console.log(person); 