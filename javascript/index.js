const showsDropdown = document.getElementById('shows-dropdown')
const listedShows = document.getElementById('listed-shows')

showsDropdown.addEventListener('change', alphabetical)


//Grab value in dropdown
function alphabetical(e){
    console.log(e)
    const letter = e.target.value
    console.log(letter)
}
