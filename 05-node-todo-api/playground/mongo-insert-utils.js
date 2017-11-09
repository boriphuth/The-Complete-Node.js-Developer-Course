const makeMongoInsertUtils = ({ db }) => ({
    insertTodo: (text, completed) => {
        db.collection('Todos').insertOne({
            text,
            completed
        }, (error, result) => {
            if (error) {
                console.log('Unable to insert todo', err);
                return;
            }

            console.log(JSON.stringify(result.ops, undefined, 2));
        });
    },
    insertUser: (name, age, location) => {
        db.collection('Users').insertOne({
            name,
            age,
            location
        }, (error, result) => {
            if (error) {
                console.log('Unable to insert user', err);
                return;
            }

            console.log(JSON.stringify(result.ops, undefined, 2));
        });
    }
})

module.exports = {
    makeMongoInsertUtils
}