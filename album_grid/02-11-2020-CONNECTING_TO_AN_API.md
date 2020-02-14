## Tasks

1. Set up a JSON server, to store the information about our albums.
  - `npm install -g json-server`
  - create a `db.json` file and load our data from script.js into it.
  - https://github.com/typicode/json-server
  - [Tutorial on how to use it](https://egghead.io/lessons/nodejs-creating-demo-apis-with-json-server)
  - [JSONVIEW Chrome Extension](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en)
2. Connect to that server using fetch to load albums into the DOM
3. Hook up our form so that it posts data to our JSON API

## Concepts

### JSON server (npm package)
Set up a REST API that's connect to a .json file. That file contains the information in our database. We'll call it `db.json`. It works by running a command in the terminal `json-server` and passing in the path to the file that holds the json we want to serve. After we run that command we can connect to the server at `http://localhost:3000/db` and that will give us the entire database. I'll show you how we can connect to just part of the database by how we actually the structure the JSON inside of that file.  

### Fetch API

It uses the Promise API. When I make a fetch (when I call the fetch method and pass in a URL) I get a promise for the response later on. 
Promise
[MDN Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)


### Promises
* bundle of data that has a starting point and an ending point.
* 3 possible statuses: "pending", "resolved", "rejected"
* Our way of cleanly handling asynchronous code.
* we'll consume them more than we build our own.
* They have a `.then` method which takes a callback function and also a `.catch` method which takes a callback. `.then()` gets called when a promise is resolved. `.catch()` gets called when a promise is rejected.

### Asynchronous Code

* code that runs independently 
* synchronous is when everyone has the same time source
* async is when you're using your own individual timing
* Javascript is single threaded
* Browser can do multiple tasks at once

# 02-13-2020 Study Group 
## Tasks
1. Add the ability to Edit an Existing Album 
- PATCH request to /albums/:id
- JS needs to know what the current role of the form is(new or edit) (editingAlbum state property)
- Split up the code that sends requests into separate functions (createAlbum, updateAlbum)
- If it's edit, it also needs to know which album we're editing (the id)
- Our event listener is always creating a POST request. We need it to submit a post request when we're creating a new one, but to submit a PATCH to the right URL if we're editing.
- Add in a variable to track the state of the form so our JS knows what should happen at any given point. (covertArtValue, albumTitleValue, aristNameValue, editingAlbum: null)
- We need to add event listeners so that when users interact with the form, or click on an edit link, the formState updates.
- create a function that loads the form with data from the formState object.

### UI State
Albums currently loaded from API
formState (current state of the form fields)
editingAlbumId: the id of the album we're editing (unless we're creating a new one in which case this will be null)
### View Logic 
function to display the form filled with values from the state
logic to change header for album form if we're editing vs adding a new album
Add an edit button to each album in the grid
### Rerendering functions
(where we hook in to the view logic and actually put updated info in the dom when the UI state changes)
These functions get called from event handlers 
### User Actions and how they update UI state
When a user clicks on an edit button for an Album, we need to update the formState with that album's info and set editingAlbumId to that album's id.
When a user submits the form, we need to check whether we're editing or creating and call the right function for that moment.
After a user submits the form, we want to clear out the form fields (and reset formState)
When a user clicks on the edit button, we should see the form to edit that album and only that Album in the grid.
  - Add event listener to the edit button
  - find the album in UIState.albums that the user wants to edit
  - UIState.formState = editingAlbum
  - UIState.editingAlbumId = editingAlbum.id
  - updateAlbumList([editingAlbum])
  - updateForm(UIState.formState)
  - finish the updateAlbum function