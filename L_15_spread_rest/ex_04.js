// Rest
// Собирает все параметры в массив либо в объект
function sum(a, b, ...rest) {
    console.log("rest", rest);
    return a + b + rest.reduce((a, i) => a + i, 0);
}

const numbers = [1, 2, 3, 4, 5];

// Spread 
console.log(sum(...numbers)); // 3 = 1 + 2 из numbers