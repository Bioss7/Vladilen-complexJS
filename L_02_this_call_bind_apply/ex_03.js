function hello() {
    console.log('Hello', this);
}

const person = {
    name: 'Vladilen',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(window), // переопределить контекст, вместо window можно написать this
    logInfo: function(job, phone) { // this указывает на контекст person
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Name is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${job}`);
        console.groupEnd();
    } 
}

person.logInfo();

const lena = {
    name: 'Elena',
    age: 23
}

// Методы call и apply
// const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend', '8-999-123-12-23')();

// Метод call помимо того, что задает контекст функции и какие-то параметры, он и сразу же вызывает её
// person.logInfo.call(lena, 'Frontend', '8-999-123-12-23');

// Метод apply передаем всегда 2 параметра, 1 параметр к чему привязать контекст, 2 массив аргументов
person.logInfo.apply(lena, ['Frontend', '8-999-123-12-23']);


