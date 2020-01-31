let movieTitlesDivs = Array.from(document.querySelectorAll('.ipc-poster-card__title'))
// let nineteenseventeen = movieTitlesDivs[0]
let titles = movieTitlesDivs.map(div => div.innerText)

Array.prototype.sample = function() {
  let index = Math.floor(Math.random()*this.length)
  return this[index]
}

movieTitlesDivs.forEach(div => div.innerText = titles.sample())

let movies = {
  '1': {
    id: '1', 
    title: '1917'
  }, 
  '2': {
    id: '2', 
    title: 'Joker'
  }
}

let movieOrder = [1,3,4]
movieOrder.map(id => movies[id])

fetch('/movies/1').then(response =>{
  // movies[response.id] = response // this works if it's an object
  let index = movies.findIndex(movie => movie.id === response.id)
  movies[index] = response
})
