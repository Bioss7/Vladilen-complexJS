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

const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend', '8-999-123-12-23');
fnLenaInfoLog();
// fnLenaInfoLog('Frontend', '8-999-123-12-23');
