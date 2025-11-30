const msg = document.getElementById('msg')
const tbody = document.querySelector('#tbl tbody')

function show(m) {
 	msg.textContent = m
}

function xhrGet(url, cb) {
 	const xr = new XMLHttpRequest()
 	xr.open('GET', url)
 	xr.onload = () => {
 		if (xr.status >= 200 && xr.status < 300) cb(null, JSON.parse(xr.responseText))
 		else cb(new Error('Load'))
 	}
 	xr.onerror = () => cb(new Error('Network'))
 	xr.send()
}

function xhrPatch(url, data, cb) {
 	const xr = new XMLHttpRequest()
 	xr.open('PATCH', url)
 	xr.setRequestHeader('Content-Type', 'application/json')
 	xr.onload = () => {
 		if (xr.status >= 200 && xr.status < 300) cb(null, JSON.parse(xr.responseText))
 		else cb(new Error('Patch fail'))
 	}
 	xr.onerror = () => cb(new Error('Network'))
 	xr.send(JSON.stringify(data))
}

function render(employees) {
 	tbody.innerHTML = ''
 	employees.forEach(emp => {
 		const tr = document.createElement('tr')
 		const tdId = document.createElement('td')
 		const tdName = document.createElement('td')
 		const tdStatus = document.createElement('td')
 		const tdAction = document.createElement('td')
 		tdId.textContent = emp.id
 		tdName.textContent = emp.name
 		tdStatus.textContent = emp.status
 		const btn = document.createElement('button')
 		btn.className = 'toggle'
 		btn.textContent = emp.status === 'active' ? 'Set Inactive' : 'Set Active'
 		btn.addEventListener('click', () => {
 			const old = emp.status
 			emp.status = old === 'active' ? 'inactive' : 'active'
 			tdStatus.textContent = emp.status
 			btn.textContent = emp.status === 'active' ? 'Set Inactive' : 'Set Active'
 			xhrPatch('http://localhost:3000/employees/' + emp.id, { status: emp.status }, (err) => {
 				if (err) {
 					emp.status = old
 					tdStatus.textContent = old
 					btn.textContent = old === 'active' ? 'Set Inactive' : 'Set Active'
 					show('Update failed')
 				}
 			})
 		})
 		tdAction.appendChild(btn)
 		tr.appendChild(tdId)
 		tr.appendChild(tdName)
 		tr.appendChild(tdStatus)
 		tr.appendChild(tdAction)
 		tbody.appendChild(tr)
 	})
}

xhrGet('http://localhost:3000/employees', (err, data) => {
 	if (err) {
 		show('Failed to load employees')
 		return
 	}
 	render(data)
})
