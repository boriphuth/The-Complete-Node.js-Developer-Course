// Part 1
// const fs = require('fs');
// const os = require('os');

// let user = os.userInfo();
// const username = user.username;
// let helloWorldString = `Hello ${username}`;

// fs.appendFile('firstfile.txt', helloWorldString, err => {
//     if (err) {
//         console.error(`Error appending to file ${err}`);
//     }
// })
// console.log(helloWorldString);

// Part 2
// const notes = require('./notes.js');

// let res = notes.addNote();
// console.log(res);

// let additionRes = notes.addNumbers(3, 6);
// console.log(additionRes);

// Part 3: require npm package
// const _ = require('lodash');
// console.log(`Is string? ${_.isString('test')}`);

// const filteredArray = _.uniq(['Nino', 'Hendrik', 'Nino']);
// console.log(`Filtered array: ${filteredArray}`);

// Part 4
const fs = require('fs');
const _ = require('lodash');
const { yargsConfig } = require('./yargs-config.js');

const notes = require('./notes');

var command = process.argv[2];
const argv = yargsConfig;

if (command === 'add') {
    const newNote = notes.add(argv.title, argv.body);
    if (newNote) {
        console.log('new note created');
    } else {
        console.log('node with title already exists');
    }
} else if (command === 'list') {
    const allNotes = notes.getAll();
    console.log('All notes', allNotes);
} else if (command === 'read') {
    const foundNote = notes.get(argv.title);
    if (foundNote) {
        console.log('Note found:', foundNote);
    } else {
        console.log('No note found with title');
    }
} else if (command === 'remove') {
    const noteRemoved = notes.remove(argv.title); 
    if (noteRemoved) {
        console.log('Note removed');
    } else {
        console.log('No note removed');
    }
} else {
    console.log(`Command: '${command}' not recognized`);
}