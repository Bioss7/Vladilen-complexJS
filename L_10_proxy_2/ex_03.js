// Optimization

// Поиск элемента 
// console.log(userData.find(user => user.id === 2));



const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {
        const index = {}
        args.forEach(item => (index[item.id] = item));

        return new Proxy(new target(...args), {
            get(arr, prop) {
                switch (prop) {
                    case 'push': return item => {
                        index[item.id] = item;
                        arr[prop].call(arr, item);
                    }
                    case 'findById': 
                        return id => index[id];
                    default: return arr[prop];
                }
            }
        });
    }
});

const users = new IndexedArray([
    { id: 11, name: 'Vladilen', job: 'Fullstack', age: 25 },
    { id: 22, name: 'Elena', job: 'Student', age: 22 },
    { id: 33, name: 'Victor', job: 'Backend', age: 23 },
    { id: 44, name: 'Vasilisa', job: 'Teacher', age: 24 }
]);

console.log(users);
console.log(users[0]);
users.push({id: 55, name: 'Sergey'});
console.log(users[4]);
console.log(users.findById(11));

// const index = {};
// userData.forEach(i => (index[i.id] = i));
// console.log(index);
// console.log(index[33]);

