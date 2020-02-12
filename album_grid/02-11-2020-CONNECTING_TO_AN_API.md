## Tasks

1. Set up a JSON server, to store the information about our albums.
  - `npm install -g json-server`
  - create a `db.json` file and load our data from script.js into it.
  - https://github.com/typicode/json-server
  - [Tutorial on how to use it](https://egghead.io/lessons/nodejs-creating-demo-apis-with-json-server)
  - [JSONVIEW Chrome Extension](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en)
2. Connect to that server using fetch to load albums into the DOM
3. Hook up our form so that it posts data to our JSON API
4. (Maybe Thursday) Set up Editing and deleting as well.

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