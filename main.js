console.log('hardcore');

// document.querySelector("audio").play()

var links = document.querySelectorAll("a")
console.log(links)

function playburp() {
    console.log('playburp')
    document.querySelector("audio").play()
}
document.querySelector("body").addEventListener('click', playburp)