const obj = {
    name: 'Vladilen',
    age: 26, 
    job: 'Fullstack'
}

const entries = [
    ['name', 'Vladilen'],
    ['age', 26],
    ['job', 'Fullstack']
]

// Привести объект к записи массиву
console.log(Object.entries(obj));
console.log(Object.fromEntries(entries));

