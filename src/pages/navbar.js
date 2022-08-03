import doener from '../images/doener.png'

const makeNavbar = () => {
	const navbar = document.createElement('nav')
	navbar.classList.add('navbar')

	const logo = document.createElement('img')
	logo.classList.add('navbar--image')
	logo.src = doener
	logo.width = '75'

	const header = document.createElement('header')
	header.classList.add('name')
	header.textContent = "Burak's Place"

	const ul = document.createElement('ul')
	ul.classList.add('navbar--list')

	const menuLi = document.createElement('li')
	const menuA = document.createElement('a')
	menuLi.appendChild(menuA)
	menuA.textContent = 'Menü'
	// ADD HREF

	const aboutUsLi = document.createElement('li')
	const aboutUsA = document.createElement('a')
	aboutUsLi.appendChild(aboutUsA)
	aboutUsA.textContent = 'Über Uns'
	// ADD HREF

	ul.appendChild(menuLi)
	ul.appendChild(aboutUsLi)

	navbar.appendChild(logo)
	navbar.appendChild(header)
	navbar.appendChild(ul)

	return navbar
}

export default makeNavbar
