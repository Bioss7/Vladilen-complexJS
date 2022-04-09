const object = {
    name: 'Max',
    age: 20
};

localStorage.setItem('person', JSON.stringify(object));
const raw = localStorage.getItem('person');
const person = JSON.parse(raw);
person.name = 'Vladilen';
console.log(person); 

localStorage.setItem('temp', Date.now().toString());

// Разные вкладки
// window.onstorage = () => {}
// Событие вызывается когда что-то записывается в localStorage в другой вкладке
window.addEventListener('storage', event => {
    console.log(event);
});

// Чем отличается localStorage от "Куки"
// 2 основных отличия localStorage больше по объему, чем куки (примерно 5 мб)
// основное отличие куки, улетают с запросами на сервер, что не безопасно т.к. сервер может получить их