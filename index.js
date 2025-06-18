document.addEventListener('DOMContentLoaded', () => {
	const openBtn = document.getElementById('openBtn')
	const intro = document.getElementById('intro')
	const audio = document.getElementById('introAudio')

	// Запускаем музыку через 2 секунды, если включена
	setTimeout(() => {
		const shouldPlay = localStorage.getItem('playMusic') === 'true'
		if (shouldPlay) {
			audio.play().catch(err => {
				console.warn('Автовоспроизведение заблокировано:', err)
			})
		}
	}, 2000)

	// Удаляем флаг после загрузки
	localStorage.removeItem('playMusic')

	// Кнопка "открыть"
	openBtn.addEventListener('click', e => {
		e.preventDefault()

		audio.play().catch(err => {
			console.warn('Автовоспроизведение заблокировано:', err)
		})

		localStorage.setItem('playMusic', 'true')

		intro.classList.remove('opacity-100')
		intro.classList.add('opacity-0')

		setTimeout(() => {
			window.location.href = 'invitation.html'
		}, 1000)
	})

	// Анимация появления при скролле
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('fade-in')
					observer.unobserve(entry.target)
				}
			})
		},
		{ threshold: 0.1 }
	)

	document.querySelectorAll('.fade-on-scroll').forEach(el => {
		el.classList.add('opacity-0')
		observer.observe(el)
	})
})
