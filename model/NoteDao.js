const Note = require("./Note");

const uniqueID = function () {
  let id = 0;
  return function () {
    return id++;
  };
};

class NoteDao {
  constructor() {
    this.notes = [];
    this.nextID = uniqueID();
  }

  create(content, author) {
    if (!content || !author) {
      throw new Error("Invalid attributes");
    }
    const note = new Note(content, author);
    note._id = this.nextID();
    this.notes.push(note);
    return note;
  }

  readAll(author = "") {
    if (author !== "") {
      return this.notes.filter((note) => note.author === author);
    }
    return this.notes;
  }

  read(id) {
    return this.notes.find((note) => note._id === id);
  }

  update(id, content, author) {
    if (!content || !author) {
      throw new Error("Invalid attributes");
    }

    const index = this.notes.findIndex((note) => note._id === id);
    if (index !== -1) {
      this.notes[index].content = content;
      this.notes[index].author = author;
      return this.notes[index];
    }
    return null;
  }

  delete(id) {
    const index = this.notes.findIndex((note) => note._id === id);
    if (index !== -1) {
      const note = this.notes[index];
      this.notes.splice(index, 1);
      return note;
    }
    return null;
  }
}

module.exports = NoteDao;
