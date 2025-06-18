const calendar = document.getElementById('calendar')

const daysHtml = [...Array(31)]
	.map((_, i) => {
		const day = i + 1
		if (day === 22) {
			return `
				<div class="relative">
					<p class="z-10 relative text-white">${day}</p>
					<img src="./img/Group_19.svg" class="absolute bottom-[-4px] right-0 w-[38px] z-0" />
				</div>
    `
		} else {
			return `<div>${day}</div>`
		}
	})
	.join('')

calendar.innerHTML = daysHtml

// Плавное появление заголовка
window.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.fade-in').forEach(el => (el.style.opacity = '1'))
	document
		.querySelectorAll('.fade-in-delayed')
		.forEach(el => (el.style.opacity = '1'))
})



// Таймер обратного отсчёта
function countdownTimer() {
	const targetDate = new Date('2025-07-22T00:00:00')
	const now = new Date()
	const diff = targetDate - now

	if (diff <= 0) {
		document.getElementById('days').textContent = '00'
		document.getElementById('hours').textContent = '00'
		document.getElementById('minutes').textContent = '00'
		document.getElementById('seconds').textContent = '00'
		return
	}

	const days = Math.floor(diff / (1000 * 60 * 60 * 24))
	const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
	const minutes = Math.floor((diff / (1000 * 60)) % 60)
	const seconds = Math.floor((diff / 1000) % 60)

	document.getElementById('days').textContent = days.toString().padStart(2, '0')
	document.getElementById('hours').textContent = hours
		.toString()
		.padStart(2, '0')
	document.getElementById('minutes').textContent = minutes
		.toString()
		.padStart(2, '0')
	document.getElementById('seconds').textContent = seconds
		.toString()
		.padStart(2, '0')
}

setInterval(countdownTimer, 1000)
countdownTimer() // запуск сразу при загрузке

// Появление при скролле
function handleScrollAnimation() {
	const fadeEls = document.querySelectorAll('.fade-in-on-scroll')
	const windowBottom = window.innerHeight

	fadeEls.forEach(el => {
		const rect = el.getBoundingClientRect()
		if (rect.top < windowBottom - 60) {
			el.classList.add('visible')
		}
	})
}

window.addEventListener('scroll', handleScrollAnimation)
window.addEventListener('DOMContentLoaded', handleScrollAnimation)
