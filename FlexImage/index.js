const sliders = document.querySelectorAll('.slide')
console.log(sliders)

sliders.forEach((s) => {s.addEventListener('click', () => {
	console.log('slide clicked')
	sliders.forEach((s) => {s.classList.remove('active');});
	s.classList.add('active')})})