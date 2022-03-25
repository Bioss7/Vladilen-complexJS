const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...');
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData); // передаем backendData
    }, 2000);
});

// Получаем в then backendData как объект data
p.then((data) => {
    // console.log('Promise resolved', data);
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            resolve(data);
        }, 2000);
    });

    p2.then(clientData => {
        console.log('Data received', clientData);
    })
})