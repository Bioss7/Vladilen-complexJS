// const iterator = {
//     [Symbol.iterator](n = 10) {
//         let i = 0;

//         return {
//             next() {
//                 if(i < n){
//                     return {value: ++i, done: false}
//                 }
//                 else{
//                     return {value: undefined, done: true}
//                 }
//             }
//         }
//     } 
// }

// for(let k of iterator){ // Ошибки нету т.к. [Symbol.iterator]
//     console.log(k); // value
// }

function* iter(n = 10) {
    for(let i = 0; i < n; i++) {
        yield i;
    }
}

for(let k of iter(5)){
    console.log(k);
}


