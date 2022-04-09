// LocalStorage браузерный api (работает только со строками)
// Больше по объему чем куки 5 мб данных в локальном, куки улетают запрос на сервер
const myNumber = 42;

// Удаление ключа
localStorage.removeItem('number');

// Получить значение 
console.log(localStorage.getItem('number'));

// setItem принимает 2 значения: 1: ключ по которому нужно сохранить, 2: само значение (строка)
// автоматически вызывается метод toString()
localStorage.setItem('number', myNumber.toString());
console.log(localStorage.getItem('number')); // 42

localStorage.clear();

