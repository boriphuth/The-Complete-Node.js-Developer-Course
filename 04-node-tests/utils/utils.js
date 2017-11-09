const add = (a, b) => a + b;

const asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1);
}

const square = (n) => n * n;

const asyncSquare = (n, callback) => {
    setTimeout(() => {
        callback(n * n);
    }, 1);
}

const setName = (user, fullName) => {
    let [ firstName, lastName ] = fullName.split(' ');
    user.firstName = firstName;
    user.lastName = lastName;
    return user;
}

module.exports = {
    add,
    square,
    setName,
    asyncAdd,
    asyncSquare
}