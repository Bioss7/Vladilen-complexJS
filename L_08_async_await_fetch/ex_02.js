const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms));
}

// fetch Нативная функция в браузере, аналог ajax который делает асинхронный запрос и возвращает Promise
const url = 'https://jsonplaceholder.typicode.com/todos';

// function fetchTodos() {
//     console.log('Fetch todo started...');
//     return delay(2000)
//     .then(() => fetch(url))  // ES6 fetch без return
//     .then(response => response.json()); 
// }

// fetchTodos()
//     .then(data => {
//         console.log('Data:', data)
//     })
//     .catch(e => console.error(e));

// Функции которые применяют await должны быть асинхронными 
// await ждет когда выполнится Promise
async function fetchAsyncTodos() { // async возвращает Promise
    console.log('Fetch todo started...');
    try {
        await delay(2000);
        const response = await fetch(url);
        const data = await response.json();
        console.log('Data:', data);
    } catch (e) {
        console.error(e);
    } finally {

    }
    
}

fetchAsyncTodos();
// fetchAsyncTodos().then(); // будет выполнен после последнего await