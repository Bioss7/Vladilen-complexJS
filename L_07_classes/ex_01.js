// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }

// console.log(animal);

// constructor метод для того чтобы, проинициализировать начальные значения объекта класса 
class Animal {

    static type = 'ANIMAL';

    constructor(options){
        this.name = options.name,
        this.age = options.age,
        this.hasTail = options.hasTail
    }

    voice(){
        console.log('I am Animal')
    }
}

const animal = new Animal({
    name: 'Animal',
    age: 5,
    hasTail: true
});

animal.voice();
console.log(animal);

// Обращаемся к статическому полю
console.log(Animal.type);