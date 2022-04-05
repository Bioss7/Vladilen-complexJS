function uniqValues(array) {
    return Array.from(new Set(array));
    // return [...new Set(array)];
}

console.log(uniqValues([1, 1, 2, 2, 4, 4, 4, 4, 5]));