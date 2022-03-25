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

// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// });

// Наследование  
class Cat extends Animal {
    static type = 'CAT';

    constructor(options) {
        super(options); // вызываем конструктор Animal 
        this.color = options.color;
    }

    voice() {
        super.voice(); // вызов метода у Animal
        console.log('I am cat');
    }

    get ageInfo() {
        return this.age * 7;
    }

    set ageInfo(newAge) {
        this.age = newAge;
    }
}

const cat = new Cat({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black'
});

console.log(cat);
cat.voice();
console.log(Cat.type);
cat.ageInfo = 8;
console.log(cat.ageInfo);