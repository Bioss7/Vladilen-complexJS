function hello() {
    console.log('Hello', this);
}

hello(); // object window

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

// console.log(person);
// console.log(person.sayHello()); // Получаем сам объект
// console.log(window.hello()); // hello() можно вызвать у window

// this указывает на глобальный объект window
// console.log("bind:", person.sayHelloWindow());

person.logInfo();

const lena = {
    name: 'Elena',
    age: 23
}

// Не вызывает функцию, а возвращает новую функцию которая уже привязала к себе новый контекст, для вызова функции используем в конце ()
person.logInfo.bind(lena)();
