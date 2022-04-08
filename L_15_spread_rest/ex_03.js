const divs = document.querySelectorAll('div'); // получаем NodeList коллекцию элементов, не массив объектов
const nodes = [...divs]; // получаем массив
console.log("divs", Array.isArray(divs)); 
console.log("nodes", Array.isArray(nodes));