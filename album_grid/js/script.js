// data for albums
let albums = [
  {
    coverArt: "http://mrmrs.github.io/images/0006.jpg",
    title: 'Title of Album',
    artist: 'Artist Name'
  },
  {
    coverArt: "http://mrmrs.github.io/images/0002.jpg",
    title: 'Title of Album',
    artist: 'Artist Name'
  },
  {
    coverArt: "http://mrmrs.github.io/images/0003.jpg",
    title: 'Title of Album',
    artist: 'Artist Name'
  },
  {
    coverArt: "http://mrmrs.github.io/images/0004.jpg",
    title: 'Title of Album',
    artist: 'Artist Name'
  },
  {
    coverArt: "http://mrmrs.github.io/images/0007.jpg",
    title: 'Title of Album',
    artist: 'Artist Name'
  },
  {
    coverArt: "http://mrmrs.github.io/images/0008.jpg",
    title: 'Title of Album',
    artist: 'Artist Name'
  },
  {
    coverArt: "http://mrmrs.github.io/images/0009.jpg",
    title: 'Title of Album',
    artist: 'Artist Name'
  },
  {
    coverArt: "http://mrmrs.github.io/images/0010.jpg",
    title: 'Title of Album',
    artist: 'Artist Name'
  },
  {
    coverArt: "http://mrmrs.github.io/images/0011.jpg",
    title: 'Title of Album',
    artist: 'Artist Name'
  },
  {
    coverArt: "http://mrmrs.github.io/images/0012.jpg",
    title: 'Title of Album',
    artist: 'Artist Name'
  },
  {
    coverArt: "http://mrmrs.github.io/images/0013.jpg",
    title: 'Title of Album',
    artist: 'Artist Name'
  },
  {
    coverArt: "http://mrmrs.github.io/images/0014.jpg",
    title: 'Title of Album',
    artist: 'Artist Name'
  },
  {
    coverArt: "http://mrmrs.github.io/images/0015.jpg",
    title: 'Title of Album',
    artist: 'Artist Name'
  },
  {
    coverArt: "http://mrmrs.github.io/images/0016.jpg",
    title: 'Title of Album',
    artist: 'Artist Name'
  },
  {
    coverArt: "http://mrmrs.github.io/images/0017.jpg",
    title: 'Title of Album',
    artist: 'Artist Name'
  },
  {
    coverArt: "http://mrmrs.github.io/images/0018.jpg",
    title: 'Title of Album',
    artist: 'Artist Name'
  },
  {
    coverArt: "http://mrmrs.github.io/images/0019.jpg",
    title: 'Title of Album',
    artist: 'Artist Name'
  },
  {
    coverArt: "http://mrmrs.github.io/images/0020.jpg",
    title: 'Title of Album',
    artist: 'Artist Name'
  },
  {
    coverArt: "http://mrmrs.github.io/images/0021.jpg",
    title: 'Title of Album',
    artist: 'Artist Name'
  },
  {
    coverArt: "http://mrmrs.github.io/images/0022.jpg",
    title: 'Title of Album',
    artist: 'Artist Name'
  }
];
// convert data for events into HTML markup to display
albums.renderList = function() {
  return this.map(function(album){
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

function updateAlbumList() {
  getRoot().innerHTML = albums.renderList()
}

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  updateAlbumList()
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
    albums.unshift(album)
    updateAlbumList()
  })
});