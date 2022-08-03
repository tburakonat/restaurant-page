const makeHome = () => {
	const home = document.createElement('div')
	home.classList.add('home')

	const header = document.createElement('div')
	header.classList.add('header')

	const h2 = document.createElement('h2')
	h2.textContent = 'Genieße fantastisches Essen und ein entspanntes Ambiente'
	header.appendChild(h2)

	const information = document.createElement('div')
	information.classList.add('information')

	const place = document.createElement('div')
	place.classList.add('place')
	place.innerHTML = 'Musterstraße 13,<br />63571 Gelnhausen'

	const time = document.createElement('div')
	time.classList.add('time')
	time.innerHTML = 'Mo-Fr: 8 - 20 Uhr <br /> Sa-So: 10 - 22 Uhr'

	information.appendChild(place)
	information.appendChild(time)

	home.appendChild(header)
	home.appendChild(information)

	return home
}

export default makeHome
