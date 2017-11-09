let db = require('./db');
// const db = require('./db');

module.exports.handleSignup = (email, password) => {
    // Check if email exists
    console.log(db.saveUser.toString());
    db.saveUser({
        email,
        password
    });
    // Send welcome email
}