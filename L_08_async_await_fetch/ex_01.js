// https://jsonplaceholder.typicode.com/
const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms));
}

// delay(2000).then(() => console.log('2 sec'));
// fetch Нативная функция в браузере, аналог ajax который делает асинхронный запрос и возвращает Promise
const url = 'https://jsonplaceholder.typicode.com/todos';

function fetchTodos() {
    console.log('Fetch todo started...');
    return delay(2000)
    .then(() => fetch(url))  // ES6 fetch без return
    .then(response => response.json()); 
}

fetchTodos()
    .then(data => {
        console.log('Data:', data)
    })
    .catch(e => console.error(e));