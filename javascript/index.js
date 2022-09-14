const showsDropdown = document.getElementById('shows-dropdown')
const listedShows = document.getElementById('listed-shows')

showsDropdown.addEventListener('change', alphabetical)

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

//Grab value in dropdown
function alphabetical(e){
    const letter = e.target.value
    const filteredShows = show.filter(individualShow => individualShow.name.startsWith(letter))
    filteredShows.forEach(show => {
        console.log(show)
        const li = document.createElement('li')
        li.innerHTML = show.name
        listedShows.append(li)
        })
    }