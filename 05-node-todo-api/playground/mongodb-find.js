const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        console.log('Unable to connect to MongoDB server');
        return;
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').find({ _id: new ObjectID('59f07f24e0046e1818368139') }).toArray()
        .then(todos => {
            console.log('Todos', JSON.stringify(todos, undefined, 2));
        }, error => {
            console.log('Unable to fetch todos', error);
        });

    db.collection('Todos').find().count((error, count) => {
        if (error) {
            console.log('Error getting todo count', error);
            return;
        }

        console.log(`Todos amount: ${count}`);
    });

    db.collection('Users').find({ name: 'Nino' }).count((error, count) => {
        if (error) {
            console.log('Error getting User count with name Nino', error);
            return;
        }

        console.log(`User count with name Nino: ${count}`);
    });
    
    // db.close();
});