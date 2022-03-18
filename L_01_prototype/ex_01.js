const person =  {
    name: 'Maxim',
    age: 25,
    greet: function() {
        console.log("Greet!");
    }
}

console.log(person.name);
console.log(person.age);
console.log(person.greet());

// Прототип
console.log(person.toString()); // [object Object]