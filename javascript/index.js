const showsDropdown = document.getElementById('shows-dropdown')
const listedShows = document.getElementById('listed-shows')

showsDropdown.addEventListener('change', alphabetical)

allShows()


//Collect list of Show Names
function allShows(){
    fetch('https://api.tvmaze.com/shows')
    .then(resp => resp.json())
    .then(data => console.log('data', data))
}

//Grab value in dropdown
function alphabetical(e){
    console.log(e)
    const letter = e.target.value
    console.log(letter)
}
