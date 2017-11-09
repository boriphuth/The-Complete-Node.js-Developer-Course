const yargs = require('yargs');

const titleOptions = {
    describe: 'The title of the new note',
    demand: true,
    alias: 't'
}

const bodyOptions = {
    describe: 'The body of the new note',
    demand: true,
    alias: 'b'
}

const yargsConfig = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'Lists all the notes')
    .command('read', 'Read a note', {
        title: titleOptions,
    })
    .command('remove', 'Removes a note', {
        title: titleOptions,
    })
    .help()
    .argv;


module.exports = {
    yargsConfig
}