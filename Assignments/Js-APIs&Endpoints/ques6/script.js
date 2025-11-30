const f = document.getElementById('f')
const email = document.getElementById('email')
const nameEl = document.getElementById('name')
const msg = document.getElementById('msg')

f.addEventListener('submit', async e => {
 	e.preventDefault()
 	msg.textContent = ''
 	const em = email.value.trim()
 	try {
 		const check = await fetch('http://localhost:3000/users?email=' + encodeURIComponent(em))
 		const users = await check.json()
 		if (users.length > 0) {
 			msg.textContent = 'Email already registered'
 			return
 		}
 		const res = await fetch('http://localhost:3000/users', {
 			method: 'POST',
 			headers: { 'Content-Type': 'application/json' },
 			body: JSON.stringify({ email: em, name: nameEl.value })
 		})
 		if (!res.ok) throw new Error('Fail')
 		msg.textContent = 'Registered'
 	} catch (err) {
 		msg.textContent = 'Registration failed'
 	}
})
