// Hidden properies
const withHiddenProps = (target, prefix = "_") => {
    return new Proxy(target, {
      has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
      ownKeys: (obj) =>
        Reflect.ownKeys(obj) // массив из строк, каждая строка ключ объекта
          .filter((p) => !p.startsWith(prefix)),
          get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0),
    });
  };
  
  // console.log(Reflect.ownKeys(position));
  
  const data = withHiddenProps({
      name: 'Vladilen',
      age: 25,
      _uid: '123'
  });
  
  console.log(data);
  console.log(data._uid); // undefined поле скрыто
  console.log('_uid' in data); // false
  for(let key in data) console.log(key); // Перебрали ключи
  console.log(Object.keys(data)); // Получили ключи
  