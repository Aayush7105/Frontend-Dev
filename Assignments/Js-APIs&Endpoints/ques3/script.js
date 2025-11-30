const list = document.getElementById('list')
const sort = document.getElementById('sort')

function fetchAndRender() {
 	const q = sort.value
 	const url = 'http://localhost:3000/tasks' + (q ? ('?priority=' + q) : '')
 	fetch(url)
 		.then(r => r.json())
 		.then(data => {
 			list.innerHTML = ''
 			data.forEach(t => {
 				const li = document.createElement('li')
 				const left = document.createElement('div')
 				left.textContent = t.title + ' (' + t.priority + ')'
 				const right = document.createElement('div')
 				const cb = document.createElement('input')
 				cb.type = 'checkbox'
 				cb.checked = !!t.completed
 				cb.addEventListener('change', () => {
 					const newVal = cb.checked
 					fetch('http://localhost:3000/tasks/' + t.id, {
 						method: 'PATCH',
 						headers: { 'Content-Type': 'application/json' },
 						body: JSON.stringify({ completed: newVal })
 					}).catch(() => {
 						cb.checked = !newVal
 					})
 				})
 				right.appendChild(cb)
 				li.appendChild(left)
 				li.appendChild(right)
 				list.appendChild(li)
 			})
 		})
 		.catch(() => {
 			list.innerHTML = 'Failed to load tasks'
 		})
}

sort.addEventListener('change', fetchAndRender)

fetchAndRender()
