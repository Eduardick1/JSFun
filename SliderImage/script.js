const btnUp = document.querySelector('.up')
const btnDown = document.querySelector('.down')
const sideBar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slideNumber = mainSlide.querySelectorAll('div').length
const cont = document.querySelector('.container')
let activeSlideIndex = 0
sideBar.style.top = `-${(slideNumber - 1)* 100}dvh`

function Direction(direction) {
	console.log(direction)
	if (direction === 'up') {
		activeSlideIndex++
		if (activeSlideIndex === slideNumber) {
			activeSlideIndex = 0
		}
	} else {
		activeSlideIndex--
		if (activeSlideIndex < 0) {
			activeSlideIndex = slideNumber - 1
		}
	}
	let height = cont.clientHeight
	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
	sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

btnUp.addEventListener('click', () => {Direction('up')})
btnDown.addEventListener('click', () => {Direction('down')})