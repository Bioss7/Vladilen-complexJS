// Network в Google Chrome посмотреть запрос
const requestURL = 'https://jsonplaceholder.typicode.com/users';

const xhr = new XMLHttpRequest();

xhr.open('GET', requestURL);

xhr.onload = () => {
    // console.log(typeof xhr.response); // string
    console.log(JSON.parse(xhr.response)); // получаем объект
}

xhr.send();