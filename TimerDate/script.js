const info = document.querySelector('h2');
const btnDate = document.querySelector('#date');
const btnFull = document.querySelector('#full');
const btnTime = document.querySelector('#time');
const btns = document.querySelectorAll('button');

let mode = 'time';

function changeDateTime (btn) {
	switch (btn) {
		case 'time': 
			return new Date().toLocaleTimeString()
		case 'date':
			return new Date().toLocaleDateString()
		case 'full':
			return new Date().toString()}};

function update(btn = mode) {
	mode = btn
	info.textContent = changeDateTime(mode)};
			
setInterval(update, 1000)
btns.forEach((btn) => btn.addEventListener('click', () => update(btn.id)));
