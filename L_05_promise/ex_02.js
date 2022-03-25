//  promise упрощают работу с асинхронными операциями 

// promise принимает 2 аргумента, 1 resolve, 2 reject (функции)
// resolve вызывается тогда, когда закончена асинхронная операция и причем закончена успешно 
const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...');
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(); // promise завершил свое выполнение 
    }, 2000);
});

// У promise есть методы которые можем использовать 
// then когда promise выполниться resolve();
p.then(() => {
    console.log('Promise resolved');
})