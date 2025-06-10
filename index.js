const button = document.getElementById('open-invitation')
const content = document.getElementById('page-content')

button.addEventListener('click', e => {
	e.preventDefault() // отменяем переход по ссылке

	// запускаем анимацию исчезновения
	content.classList.add('fade-out')

	// через 800мс (время анимации) открываем новую страницу
	setTimeout(() => {
		window.location.href = './invitation.html'
	}, 800)
})

" ${[...Array(31)].map((_, i) => { const day = i + 1; if (day === 20) { return ` "


