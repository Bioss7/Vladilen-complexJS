// WeakMap похож на Map, но не допускает утечки данных
let obj = {name: 'weakmap'};

const arr = [obj]
obj = null;

console.log(obj);
console.log(arr[0]); // объект не удалилися