const uCount = document.getElementById('u-count')
const oCount = document.getElementById('o-count')
const pCount = document.getElementById('p-count')
const warn = document.getElementById('warn')

function showSkeletons() {
 	document.getElementById('u-skel').style.display = 'block'
 	document.getElementById('o-skel').style.display = 'block'
 	document.getElementById('p-skel').style.display = 'block'
}

function hideSkeletons() {
 	document.getElementById('u-skel').style.display = 'none'
 	document.getElementById('o-skel').style.display = 'none'
 	document.getElementById('p-skel').style.display = 'none'
}

showSkeletons()

const users = fetch('http://localhost:3000/users').then(r => r.json())
const orders = fetch('http://localhost:3000/orders').then(r => r.json())
const products = fetch('http://localhost:3000/products').then(r => r.json())

Promise.allSettled([users, orders, products])
 	.then(results => {
 		hideSkeletons()
 		const [u, o, p] = results
 		if (u.status === 'fulfilled') uCount.textContent = u.value.length
 		else uCount.textContent = '-'
 		if (o.status === 'fulfilled') oCount.textContent = o.value.length
 		else oCount.textContent = '-'
 		if (p.status === 'fulfilled') pCount.textContent = p.value.length
 		else pCount.textContent = '-'
 		if (results.some(x => x.status === 'rejected')) warn.textContent = 'Some data could not be loaded.'
 	})
 	.catch(() => {
 		hideSkeletons()
 		warn.textContent = 'Some data could not be loaded.'
 	})
