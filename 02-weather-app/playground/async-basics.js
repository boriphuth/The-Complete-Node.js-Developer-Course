console.log('Starting app');

setTimeout(() => console.log('in set Timeout'), 2000)

setTimeout(() => console.log('second callback'), 0);

console.log('Finishing up');