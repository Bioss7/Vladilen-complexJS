// Экземпляр instance класса 
const person = new Object({
    name: 'Maxim',
    age: 25,
    greet: function() {
        console.log("Greet!");
    }
});

// Добавили функцию для прототипа 
Object.prototype.sayHello = function() {
    console.log("Hello");
}

person.sayHello();

// Создали объект взяв прототип person, унаследовали свойства от прототипа 
const lena = Object.create(person);
lena.name = 'Elena';
console.log(lena.name);
lena.greet();

// const str = 'I am string';
const str = new String('I am string');