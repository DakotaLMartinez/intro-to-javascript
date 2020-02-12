let albums = []
const renderList = (albums) => {
  return albums.map(function(album){
    return `
    <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
      <div class="aspect-ratio aspect-ratio--1x1">
        <img style="background-image:url(${album.coverArt});" 
        class="db bg-center cover aspect-ratio--object" />
      </div>
      <a href="#0" class="ph2 ph0-ns pb3 link db">
        <h3 class="f5 f4-ns mb0 black-90">${album.title}</h3>
        <h3 class="f6 f5 fw4 mt2 black-60">${album.artist}</h3>
      </a>
    </article>
    `
  }).join("")
}

// establish link to our html
function getRoot() {
  return document.getElementById('root')
}

function getForm() {
  return document.getElementById('addAlbum')
}

function updateAlbumList(albums) {
  getRoot().innerHTML = renderList(albums)
}

window.addEventListener('DOMContentLoaded', (event) => {
  
  console.log('DOM fully loaded and parsed');
  fetch("http://localhost:3000/albums")
    .then(res => res.json())
    .then(json => {
      albums = json
      updateAlbumList(albums)
    })
  getForm().addEventListener('submit', (event) => {
    event.preventDefault();
    let artistName = event.target.querySelector('#artistName').value
    let coverArt = event.target.querySelector('#coverArt').value
    let title = event.target.querySelector('#title').value
    let album = {
      coverArt: coverArt,
      title: title,
      artist: artistName
    }
    fetch("http://localhost:3000/albums", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(album)
    })
      .then(res => res.json())
      .then(json => {
        albums.push(json)
        updateAlbumList(albums)
      })
  })
});