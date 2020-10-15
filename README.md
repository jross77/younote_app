# YouNote API

We are going to build the API for a note taking application called YouNote.

In our API, users will be able to create notes, as well as read, update, and delete the notes they’ve created.

This repository contains a model for `Note`, a data access object `NoteDao` and the following API endpoints:

* GET `/api/notes`
* GET `/api/notes?author=author_name`
* GET `/api/notes/:noteId`

Look at `index.js` for more details.


## Local Development

* Clone this repository. 
* Open the root folder in the terminal and type in `npm install`
* To run the application: `nodemon index.js` (make sure `nodemon` is installed; see the lecture notes).