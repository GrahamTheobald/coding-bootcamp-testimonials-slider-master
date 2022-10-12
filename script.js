const prev = document.querySelector("[data-prev")
const next = document.querySelector("[data-next")
const container = document.querySelector("[data-container")
const pictures = [...document.querySelectorAll("[data-pic")]
const divs = [...document.querySelectorAll("[data-div]")]

let currentImage = 1

console.log(pictures)

prev.addEventListener("click", slide.bind(event, 'prev'), false)
next.addEventListener("click", slide.bind(event, 'next'), false)

function slide(direction) {
    if (direction == 'prev') {
        if (currentImage == 1) return
        currentImage -= 1
        renderImage()
        renderDivs()
    }
    else {
        if (currentImage == pictures.length) return
        currentImage += 1
        renderImage()
        renderDivs()
    }   
}

function renderImage() {
    pictures.forEach(picture => picture.classList.add("hidden"))
    const current = document.querySelector(`[data-pic="${currentImage}"]`)
    current.classList.remove("hidden")
}

function renderDivs() {
    divs.forEach(div => div.classList.add("hidden"))
    const current = document.querySelector(`[data-div="${currentImage}"]`)
    current.classList.remove("hidden")

}