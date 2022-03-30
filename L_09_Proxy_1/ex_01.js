// Proxy класс в JS который позволяет создавать различные ловушки для объектов, функций, классов и т.д.
// Идея Proxy переписывать базовый функционал 

// Object
const person = {
    name: 'Vladilen',
    age: 25,
    job: 'Fullstack'
}

// Повторяет функционал объекта 
// 1 параметр таргет, 2 параметр handler ловушки  
const op = new Proxy(person, {
    get(target, prop) {
        // console.log('Target', target);
        // console.log('Prop', prop);
        console.log(`Getting prop ${prop}`);
        return target[prop];
    },
    set(target, prop, value) {
        if(prop in target) {
            target[prop] = value;
        } else {
            throw new Error(`No ${prop} field in target`);
        }
    }, 
    has(target, prop){ // true или false
        return ['age', 'name', 'job'].includes(prop);
    },
    deleteProperty(target, prop) {
        console.log('Deleting...', prop);
        delete target[prop];
        return true;
    }
});

// Установили новое значение set
console.log(op.age = 25);
// Получили новое значение 
console.log(op.age);
console.log(op);

// Проверить значение в op
console.log('name' in op); // true
console.log('age2' in op); // false

// Удаление prop
delete op.age;




