// Замыкания функция внутри другой функции
function createCalcFunction(n) {
    return function() {
        console.log(1000 * n);
    }
}

// createCalcFunction возвращает функцию
const calc = createCalcFunction(42);
console.log(calc);
// вызвали функцию
calc();