// Генераторы некоторые функции которые могут последовательно выдавать нам результат её работы 

function* strGenerator() {
    yield 'H'
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'
}

const str = strGenerator();

console.log(str.next());
console.log(str.next().value);