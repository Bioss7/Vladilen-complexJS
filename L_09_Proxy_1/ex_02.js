// Functions
const log = text => `Log: ${text}`;

// 1 параметр таргет log, 2 параметр объект handler
// apply target функция, thisArg - контекст, если был, args массив все параметры которые передаем в функцию
const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log('Calling fn...');


        return target.apply(thisArg, args).toUpperCase(); // Вызов функции 
    }
})

console.log(fp('Hello'));


