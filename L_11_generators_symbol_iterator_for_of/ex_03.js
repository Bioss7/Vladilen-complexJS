const iterator = {
    gen(n = 10) {
        let i = 0;

        return {
            next() {
                if(i < n){
                    return {value: ++i, done: false}
                }
                else{
                    return {value: undefined, done: true}
                }
            }
        }
    } 
}

const itr = iterator.gen();

console.log(itr.next());
console.log(itr.next());


// Цикл for of работает со специальным типом данных которых называется sybmol

// for(let k of 'Hello'){
//     console.log(k);
// }

// for(let k of [1,2,3,4,5,6,7,8]){
//     console.log(k);
// }

for(let k of iterator){ // Ошибка Uncaught TypeError: iterator is not iterable
    console.log(k);
}
