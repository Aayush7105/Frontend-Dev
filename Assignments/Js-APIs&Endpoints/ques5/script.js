const dayEl = document.getElementById('day')
const table = document.getElementById('table')

function render(list) {
 	table.innerHTML = ''
 	if (!list || list.length === 0) {
 		const d = document.createElement('div')
 		d.textContent = 'No classes today.'
 		table.appendChild(d)
 		return
 	}
 	list.forEach(it => {
 		const li = document.createElement('li')
 		li.textContent = it.time + ' - ' + it.subject + ' (' + it.faculty + ')'
 		table.appendChild(li)
 	})
}

async function load() {
 	try {
 		table.innerHTML = 'Loading...'
 		const res = await fetch('http://localhost:3000/timetable?day=' + encodeURIComponent(dayEl.value))
 		if (!res.ok) throw new Error('Network')
 		const data = await res.json()
 		render(data)
 	} catch (e) {
 		table.innerHTML = 'Failed to load timetable.'
 	}
}

dayEl.addEventListener('change', load)

load()
