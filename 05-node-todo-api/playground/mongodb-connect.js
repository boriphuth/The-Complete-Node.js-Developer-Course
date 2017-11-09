//const MongoClient = require('mongodb').MongoClient;
// Line above and below give the same result
const { MongoClient, ObjectID } = require('mongodb');

const { makeMongoInsertUtils } = require('./mongo-insert-utils');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        console.log('Unable to connect to MongoDB server');
        return;
    }
    console.log('Connected to MongoDB server');

    const {
        insertTodo,
        insertUser
    } = makeMongoInsertUtils({ db });
    
    // insertTodo('Something to do', false);
    // insertUser('Nino', 21, 'Eindhoven');

    db.close();
});