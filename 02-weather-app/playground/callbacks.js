const getUser = (id, callback) => {
    let user = {
        id,
        name: 'Nino'
    };
    setTimeout(function() {
        callback(user)
    }, 2000);
};

getUser(1001, (user) => {
    console.log(user);    
});