// // // document.addEventListener('DOMContentLoaded', () => {
// // // 	const openBtn = document.getElementById('openBtn')
// // // 	const intro = document.getElementById('intro')
// // // 	const audio = document.getElementById('introAudio')

// // // 	// Запускаем музыку через 2 секунды, если включена
// // // 	setTimeout(() => {
// // // 		const shouldPlay = localStorage.getItem('playMusic') === 'true'
// // // 		if (shouldPlay) {
// // // 			audio.play().catch(err => {
// // // 				console.warn('Автовоспроизведение заблокировано:', err)
// // // 			})
// // // 		}
// // // 	}, 2000)

// // // 	// Удаляем флаг после загрузки
// // // 	localStorage.removeItem('playMusic')

// // // 	// Кнопка "открыть"
// // // 	openBtn.addEventListener('click', e => {
// // // 		e.preventDefault()

// // // 		audio.play().catch(err => {
// // // 			console.warn('Автовоспроизведение заблокировано:', err)
// // // 		})

// // // 		localStorage.setItem('playMusic', 'true')

// // // 		intro.classList.remove('opacity-100')
// // // 		intro.classList.add('opacity-0')

// // // 		setTimeout(() => {
// // // 			window.location.href = 'invitation.html'
// // // 		}, 1000)
// // // 	})

// // // 	// Анимация появления при скролле
// // // 	const observer = new IntersectionObserver(
// // // 		entries => {
// // // 			entries.forEach(entry => {
// // // 				if (entry.isIntersecting) {
// // // 					entry.target.classList.add('fade-in')
// // // 					observer.unobserve(entry.target)
// // // 				}
// // // 			})
// // // 		},
// // // 		{ threshold: 0.1 }
// // // 	)

// // // 	document.querySelectorAll('.fade-on-scroll').forEach(el => {
// // // 		el.classList.add('opacity-0')
// // // 		observer.observe(el)
// // // 	})
// // // })

// // // JS
// // const openBtn = document.getElementById('openBtn')
// // const music = document.getElementById('bg-music')
// // const startScreen = document.getElementById('start-screen')
// // const mainContent = document.getElementById('main-content')

// // openBtn.addEventListener('click', () => {
// // 	music.play()
// // 	startScreen.classList.add('hidden')
// // 	mainContent.classList.remove('hidden')
// // })
// document.addEventListener('DOMContentLoaded', () => {
// 	const openBtn = document.getElementById('openBtn')
// 	const introSection = document.getElementById('page-content')
// 	const mainContent = document.getElementById('main-content')
// 	const audio = document.getElementById('introAudio')
// 	const musicToggle = document.getElementById('musicToggle')
// 	const musicIcon = document.getElementById('musicIcon')
// 	const calendar = document.getElementById('calendar')

// 	const daysHtml = [...Array(31)]
// 		.map((_, i) => {
// 			const day = i + 1
// 			if (day === 22) {
// 				return `
// 					<div class="relative">
// 						<p class="z-10 relative text-white">${day}</p>
// 						<img src="./img/Group_19.svg" class="absolute bottom-[-4px] right-0 w-[38px] z-0" />
// 					</div>
// 			`
// 			} else {
// 				return `<div>${day}</div>`
// 			}
// 		})
// 		.join('')

// 	calendar.innerHTML = daysHtml
// 	let isPlaying = false

// 	function playAudio() {
// 		audio
// 			.play()
// 			.then(() => {
// 				isPlaying = true
// 			})
// 			.catch(e => {
// 				console.log('Автовоспроизведение заблокировано: ', e)
// 			})
// 	}

// 	function stopAudio() {
// 		audio.pause()
// 		isPlaying = false
// 	}

// 	openBtn.addEventListener('click', () => {
// 		// Плавное исчезновение стартового экрана
// 		introSection.classList.add('opacity-0')

// 		// Задержка перед показом основного контента и запуском музыки
// 		setTimeout(() => {
// 			introSection.classList.add('hidden')
// 			mainContent.classList.remove('hidden')
// 			mainContent.classList.add('fade-in')

// 			// Запуск музыки только после перехода
// 			playAudio()
// 		}, 1000) // задержка соответствует `transition-opacity duration-1000`
// 	})

// 	// Переключение музыки вручную
// 	musicToggle.addEventListener('click', () => {
// 		if (isPlaying) {
// 			stopAudio()
// 			musicIcon.src = './img/_1_9_11.svg' // замените на свой иконку "выкл"
// 		} else {
// 			playAudio()
// 			musicIcon.src = './img/_1_9_11.svg' // включенная музыка
// 		}
// 	})

// 	// Таймер обратного отсчёта
// 	function countdownTimer() {
// 		const targetDate = new Date('2025-07-22T00:00:00')
// 		const now = new Date()
// 		const diff = targetDate - now

// 		if (diff <= 0) {
// 			document.getElementById('days').textContent = '00'
// 			document.getElementById('hours').textContent = '00'
// 			document.getElementById('minutes').textContent = '00'
// 			document.getElementById('seconds').textContent = '00'
// 			return
// 		}

// 		const days = Math.floor(diff / (1000 * 60 * 60 * 24))
// 		const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
// 		const minutes = Math.floor((diff / (1000 * 60)) % 60)
// 		const seconds = Math.floor((diff / 1000) % 60)

// 		document.getElementById('days').textContent = days
// 			.toString()
// 			.padStart(2, '0')
// 		document.getElementById('hours').textContent = hours
// 			.toString()
// 			.padStart(2, '0')
// 		document.getElementById('minutes').textContent = minutes
// 			.toString()
// 			.padStart(2, '0')
// 		document.getElementById('seconds').textContent = seconds
// 			.toString()
// 			.padStart(2, '0')
// 	}

// 	setInterval(countdownTimer, 1000)
// 	countdownTimer()
// })
document.addEventListener('DOMContentLoaded', () => {
	const openBtn = document.getElementById('openBtn')
	const introSection = document.getElementById('page-content')
	const mainContent = document.getElementById('main-content')
	const audio = document.getElementById('introAudio')
	const musicToggle = document.getElementById('musicToggle')
	const musicIcon = document.getElementById('musicIcon')
	const calendar = document.getElementById('calendar')

	let isPlaying = false

	function playAudio() {
		audio
			.play()
			.then(() => {
				isPlaying = true
			})
			.catch(e => {
				console.log('Автовоспроизведение заблокировано:', e)
			})
	}

	function stopAudio() {
		audio.pause()
		isPlaying = false
	}

	openBtn.addEventListener('click', () => {
		introSection.classList.add('opacity-0')
		setTimeout(() => {
			introSection.classList.add('hidden')
			mainContent.classList.remove('hidden')

			// Автоскролл к верху
			window.scrollTo({ top: 0, behavior: 'smooth' })

			// Плавное появление
			mainContent.classList.add('opacity-100')

			playAudio()
		}, 1000)
	})

	musicToggle.addEventListener('click', () => {
		if (isPlaying) {
			stopAudio()
		} else {
			playAudio()
		}
	})

	// Календарь
	const daysHtml = [
		`<div class="text-[#aaa]">30</div>`, // Кастомная "30" в начале
		...Array(31)
			.fill(0)
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
			}),
	].join('')

	calendar.innerHTML = daysHtml

	// Таймер
	function countdownTimer() {
		const targetDate = new Date('2025-07-22T00:00:00')
		const now = new Date()
		const diff = targetDate - now
		if (diff <= 0) {
			;['days', 'hours', 'minutes', 'seconds'].forEach(
				id => (document.getElementById(id).textContent = '00')
			)
			return
		}
		const days = Math.floor(diff / (1000 * 60 * 60 * 24))
		const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
		const minutes = Math.floor((diff / (1000 * 60)) % 60)
		const seconds = Math.floor((diff / 1000) % 60)
		document.getElementById('days').textContent = String(days).padStart(2, '0')
		document.getElementById('hours').textContent = String(hours).padStart(
			2,
			'0'
		)
		document.getElementById('minutes').textContent = String(minutes).padStart(
			2,
			'0'
		)
		document.getElementById('seconds').textContent = String(seconds).padStart(
			2,
			'0'
		)
	}
	setInterval(countdownTimer, 1000)
	countdownTimer()

	// Анимация при скролле
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible')
				}
			})
		},
		{
			threshold: 0.1,
		}
	)

	document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
		observer.observe(el)
	})
})
