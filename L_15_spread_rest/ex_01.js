const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск'];
const citiesEurope = ['Берлин', 'Прага', 'Париж'];

const citiesRussiaWithPopulation = {
    Moscow: 20, 
    SaintPetersburg: 8,
    Kazan: 5,
    Novosibirsk: 3
}

const citiesEuropeWithPopulation = {
    Moscow: 26,
    Berlin: 10,
    Praha: 3, 
    Paris: 2
}

// Spread 
// получаем массив каждый элемент строка
console.log(citiesRussia);
// получаем набор строк
console.log(...citiesRussia);
console.log(...citiesEurope);

// создали массив и склонировали его 
// const allCitites = [...citiesRussia, 'Вашингтон', ...citiesEurope];
// console.log(allCitites);

// как было раньше 
const allCitites = citiesEurope.concat(citiesRussia)
console.log(allCitites);

// Развернули значения всех ключей в объекте, создали новый объект 
console.log({...citiesRussiaWithPopulation});
// Создаем объект из 2 объектов
console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation});