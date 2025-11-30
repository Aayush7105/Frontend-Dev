const qEl = document.getElementById('q')
const results = document.getElementById('results')
const loader = document.getElementById('loader')

let timer

function clearResults() {
 	results.innerHTML = ''
}

function showNo() {
 	clearResults()
 	const d = document.createElement('div')
 	d.textContent = 'No products found'
 	results.appendChild(d)
}

function makeCard(p) {
 	const c = document.createElement('div')
 	c.className = 'card'
 	const img = document.createElement('img')
 	img.src = p.image
 	const t = document.createElement('div')
 	t.textContent = p.title
 	const pr = document.createElement('div')
 	pr.textContent = '$' + p.price
 	c.appendChild(img)
 	c.appendChild(t)
 	c.appendChild(pr)
 	return c
}

qEl.addEventListener('input', () => {
 	clearTimeout(timer)
 	const v = qEl.value.trim()
 	if (!v) {
 		clearResults()
 		return
 	}
 	loader.style.display = 'inline'
 	timer = setTimeout(async () => {
 		try {
 			const res = await fetch('https://fakestoreapi.com/products?q=' + encodeURIComponent(v))
 			const data = await res.json()
 			clearResults()
 			if (!data || data.length === 0) {
 				showNo()
 				return
 			}
 			data.forEach(p => results.appendChild(makeCard(p)))
 		} catch (e) {
 			clearResults()
 			showNo()
 		} finally {
 			loader.style.display = 'none'
 		}
 	}, 300)
})
