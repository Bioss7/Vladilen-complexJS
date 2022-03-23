const array = [1,2,3,4,5];

// function multBy(arr, n) {
//     return arr.map(function(i){
//         return i * n;
//     });
// }

// console.log(multBy(array, 5));

Array.prototype.multBy = function(n) {
    // console.log("multBy", this); // this массив
    return this.map(function(i){
        return i * n;
    });
}

console.log(array.multBy(2));
console.log([2,3,4,5].multBy(20));


