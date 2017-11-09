const asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
}

asyncAdd(5, 7)
    .then(sum => {
        console.log('Result:', sum)
        return asyncAdd(sum, 33);
    })
    .then(result => console.log('Second result:', result))
    .catch(error => console.log('Error in promise chain:', error));

// let somePromise = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         resolve('Hey, it worked');
//         // reject('Unable to fulfill promise');
//     }, 2000);
// });

// somePromise
//     .then(message => console.log('Success: ', message))
//     .catch(error => console.log('Error:', error));

// somePromise
//     .then(message => {
//         console.log('2', message);
//     }, error => {
//         console.log('2 fail', error);
//     });