// const person = {
//     name: 'Vladilen',
//     birthYear: 1993
// }

// person.name = 'Maxim';

const person = Object.create(
    {
        calculateAge() {
            console.log('Age:', new Date().getFullYear() - this.birthYear);
        }
    }, 
    {
    name: {
        value: 'Vladilen',
        enumerable: true, // доступен для перебора true, по умолчанию false
        writable: true, // доступ для записи, по умолчанию false
        configurable: true // удаление ключа у объекта, по умолчанию false
    },
    birthYear: {
        value: 1993,
        enumerable: false,
        writable: false,
        configurable: false
    },
    age: {
        get() {
            return  new Date().getFullYear() - this.birthYear;    
        },
        set(value) {
            // document.body.style.background = 'red';
            console.log('Set age', value);
        } 
    }
});

console.log(person.age);
person.age = 17;

// Функция в прототипе
person.calculateAge();

console.log(person);
delete person.name;
console.log(person);

// Цикл бежит по прототипу объекта
for(let key in person) {
    if(person.hasOwnProperty(key)){ // Получить ключи объекта person без прототипа 
        console.log('Key', key, person[key]);
    }
}




