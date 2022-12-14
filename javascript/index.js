const showsDropdown = document.getElementById('shows-dropdown')
const listedShows = document.getElementById('listed-shows')
const randomButton = document.getElementById('random')
const randomListed = document.getElementById('random-show')
const title = document.getElementById('title')
const emptyHeart = '♡'
const fullHeart = '♥'

showsDropdown.addEventListener('change', alphabetical)
randomButton.addEventListener('click', randomShow)
title.addEventListener('mouseover', titleColorChange)
reset => document.getElementById('form').reset();

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
    listedShows.innerHTML = ""
    const filteredShows = show.filter(individualShow => individualShow.name.startsWith(letter))
    eachShow(filteredShows)
}
    
function eachShow(filteredShows){
    filteredShows.forEach(show => {
    const li = document.createElement('li')
    li.innerHTML = show.name
    listedShows.append(li)
    const img = document.createElement('img')
    img.src = show.image.original
    img.style.height = '7rem'
    const p = document.createElement('p')
    p.innerHTML = show.summary
    const heartButton = document.createElement('button')
    heartButton.innerHTML = emptyHeart
    li.append(img, p, heartButton)
    listedShows.append(li)
    heartButton.addEventListener("click", likeHeart)
    })
}

const likeHeart = function(e) {
    const likes = e.target
    const like = likes.innerHTML
    if (like===emptyHeart){
        likes.innerHTML = fullHeart
    }
    else{
        likes.innerHTML = emptyHeart
    }
}

    //Grab value for submit button and attach random show
function randomShow(){
    randomListed.innerHTML = ''
    const newShow = show[Math.floor(Math.random() * 240)]
    addInformation(newShow)
  }

function addInformation(newShow){
    let li = document.createElement('li')
    li.innerHTML = newShow.name
    let img = document.createElement('img')
    img.src = newShow.image.original
    img.style.height = '8rem'
    let p = document.createElement('p')
    p.innerHTML = newShow.summary
    li.append(img, p)
    randomListed.append(li)
    }

function titleColorChange(e){
    e.target.style.color = "grey"
    setTimeout(() => {
        e.target.style.color = "white"
    }, 1000)
}