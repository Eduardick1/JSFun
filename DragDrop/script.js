const drag = document.querySelector('.drag')
const places = document.querySelectorAll('.place')

drag.addEventListener('dragstart', (e) => {
	e.target.classList.add('hold');
	setTimeout(() => e.target.classList.add('hide'), 0)
})
drag.addEventListener('dragend', (e) => {
	e.target.className = 'drag'
})

function dragOver(e) {
	e.preventDefault()
}
function dragEnter(e) {
	e.target.classList.add('hovered')
}
function dragLeave(e) {
	e.target.classList.remove('hovered')
}
function dragDrop(e) {
	e.target.append(drag)
	e.target.classList.remove('hovered')
}


places.forEach((p) => {
p.addEventListener('dragover', dragOver)
p.addEventListener('dragenter', dragEnter)
p.addEventListener('dragleave', dragLeave)
p.addEventListener('drop', dragDrop)
})
