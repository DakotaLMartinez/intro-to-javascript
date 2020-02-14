// UI state
let UIState = {
  albums: [],
  formState: {
    coverArt: '',
    albumTitle: '',
    artistName: ''
  },
  editingAlbumId: null
}

// view logic
const renderForm = (formState) => {
  return `
    <form id="addAlbum">
      <h3>${formState.id ? "Edit Album" : "Add Album"}</h3>
      <p>
        <label for="coverArt" class="db">Cover Art</label>
        <input type="text" name="coverArt" id="coverArt" value="${formState.coverArt}" class="trackInput" />
      </p>
      <p>
        <label for="title" class="db">Album Title</label>
        <input type="text" name="albumTitle" id="albumTitle" value="${formState.albumTitle}" class="trackInput" />
      </p>
      <p>
        <label for="artistName" class="db">Artist Name</label>
        <input type="text" name="artistName" id="artistName" value="${formState.artistName}" class="trackInput" />
      </p>
      <input type="submit" value="${formState.id ? "Edit Album" : "Add Album"}" />
    </form>
  `
}
const renderList = (albums) => {
  return albums.map(function(album){
    return `
    <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
      <div class="aspect-ratio aspect-ratio--1x1">
        <img style="background-image:url(${album.coverArt});" 
        class="db bg-center cover aspect-ratio--object" />
      </div>
      <a href="#0" class="ph2 ph0-ns pb3 link db">
        <h3 class="f5 f4-ns mb0 black-90">${album.albumTitle}</h3>
        <h3 class="f6 f5 fw4 mt2 black-60">${album.artistName}</h3>
      </a>
      <p><button class="editAlbum" data-id="${album.id}">Edit Album</button></p>
    </article>
    `
  }).join("")
}

// getting DOM nodes
function getRoot() {
  return document.getElementById('root')
}

function getFormContainer() {
  return document.getElementById('form')
}

// updating the DOM
function updateForm(formState) {
  getFormContainer().innerHTML = renderForm(formState)
  // tracks form State on change of text field inputs
  document.querySelectorAll('.trackInput').forEach(input => {
    input.addEventListener('change', (e) => {
      UIState.formState[e.target.name] = e.target.value
    })
  })
}

function updateAlbumList(albums) {
  getRoot().innerHTML = renderList(albums)
  document.querySelectorAll('.editAlbum').forEach(button => {
    button.addEventListener('click', (e) => {
      let editingAlbum = UIState.albums.find(album => album.id == e.target.dataset.id)
      UIState.formState = editingAlbum
      UIState.editingAlbumId = editingAlbum.id
      updateAlbumList(UIState.albums.filter(album => album.id == e.target.dataset.id))
      updateForm(UIState.formState)
    })
  })
}

// User Actions/Event Listeners updating UI state and updating the DOM (using pieces of that UI state as arguments)

window.addEventListener('DOMContentLoaded', (event) => {
  
  console.log('DOM fully loaded and parsed');
  // adds form to the DOM
  updateForm(UIState.formState)
  
  fetch("http://localhost:3000/albums")
    .then(res => res.json())
    .then(json => {
      UIState.albums = json
      updateAlbumList(UIState.albums)
    })
  getFormContainer().addEventListener('submit', (event) => {
    event.preventDefault();
    if(UIState.editingAlbumId) {
      updateAlbum(UIState.formState)
    } else {
      createAlbum(UIState.formState)
    }
  })
});

function createAlbum(album) {
  fetch("http://localhost:3000/albums", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(album)
  })
    .then(res => res.json())
    .then(json => {
      UIState.albums.push(json)
      updateAlbumList(UIState.albums)
    })
}

function updateAlbum(album) {
  debugger
  fetch(`http://localhost:3000/albums/${album.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(album)
  })
    .then(res => res.json())
    .then(json => {
      UIState.albums = UIState.albums.map(album => {
        if(album.id === json.id) {
          return json
        } else {
          return album
        }
      })
      updateAlbumList(UIState.albums)
    })
}
