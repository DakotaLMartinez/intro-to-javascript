document.addEventListener('DOMContentLoaded', (event) => {
  console.log('wazzup')
  function handleClick(){
    alert('clicked')
    debugger;
  }
  var btn = document.querySelector('button#btn')
  btn.addEventListener('click', handleClick)
});

for(let i = 0 ; i < 10 ; i++) {
  console.log(i);
}