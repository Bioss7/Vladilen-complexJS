const cache = new WeakMap();

function cacheUser(user) {
    if(!cache.has(user)) {
        cache.set(user, Date.now());
    }
    return cache.get(user);
}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

lena = null; // Автоматически Из WeakMap был удален данный ключ

console.log(cache.get(lena));

console.log(cache.has(lena));
console.log(cache.has(alex));



