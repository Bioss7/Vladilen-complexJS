const person = {
    name: 'Max',
    age: 20,
    address: {
        country: 'Russia',
        city: 'Moscow'
    }
}

function logPerson({name: firstName = '111', age}) {
    console.log(firstName + ' ' + age);
}

logPerson(person);