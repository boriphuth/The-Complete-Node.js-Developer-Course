const fs = require('fs');

const addNumbers = (a, b) => {
    return a + b;
};

const getNotesFromFile = () => {
    try {
        const notesString = fs.readFileSync('notes.json');
        return JSON.parse(notesString);
    } catch (error) {
        console.error(error);
        return [];
    }
}

const saveNotesInFile = notes => {
    try {
        fs.writeFileSync('notes.json', JSON.stringify(notes));
    } catch (error) {
        console.error(`Error saving notes in file, error: ${error}`);
    }
}

const titleExists = title => {
    const existingNotes = getAll();
    return existingNotes.some(note => note.title === title);
}

const add = (title, body) => {
    if (titleExists(title)) {
        return;
    }

    let notes = getAll();
    let newNote = {
        title,
        body
    }

    notes.push(newNote);

    saveNotesInFile(notes);

    return newNote;
};

const getAll = () => {
    return getNotesFromFile();
};

const get = (title) => {
    const allNotes = getAll();
    return allNotes.find(note => note.title === title);
};

const remove = (title) => {
    const allNotes = getAll();
    let remainingNotes = allNotes.filter(note => note.title !== title);

    const noteRemoved = allNotes.length !== remainingNotes.length;

    if (noteRemoved) {
        saveNotesInFile(remainingNotes);
    }

    return noteRemoved;
};

module.exports = {
    addNumbers,
    add,
    getAll,
    get,
    remove
};