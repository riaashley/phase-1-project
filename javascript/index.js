const showsDropdown = document.getElementById('shows-dropdown')
const listedShows = document.getElementById('listed-shows')
const randomButton = document.getElementById('random')

showsDropdown.addEventListener('change', alphabetical)
randomButton.addEventListener('click', randomShow)

allShows()
let show

//Collect list of Show Names
function allShows(){
    fetch('https://api.tvmaze.com/shows')
    .then(resp => resp.json())
    .then(data => {
        show = data
    })
}

//Grab value in dropdown and attach details
function alphabetical(e){
    const letter = e.target.value
    const filteredShows = show.filter(individualShow => individualShow.name.startsWith(letter))
    filteredShows.forEach(show => {
        console.log(show)
        const li = document.createElement('li')
        li.innerHTML = show.name
        listedShows.append(li)
        const img = document.createElement('img')
        img.src = show.image.original
        img.style.height = '7rem'
        const p = document.createElement('p')
        p.innerHTML = show.summary
        li.append(img, p)
        listedShows.append(li)
        })
    }

    //Grab value for submit button and attach random show
  function randomShow(){
    const newShow = show[Math.floor(Math.random() * 240)]
    console.log(newShow)
  }
    