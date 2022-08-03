import doener from '../images/doener.png'
import makeAboutUs from './aboutUs'
import makeHome from './home'
import makeMenu from './menu'
import render from '../functions/render'

const makeNavbar = () => {
	const content = document.querySelector('#content')

	const navbar = document.createElement('nav')
	navbar.classList.add('navbar')

	const logo = document.createElement('img')
	logo.classList.add('navbar--image')
	logo.src = doener
	logo.width = '75'
	logo.addEventListener('click', () => {
		render()
		content.appendChild(makeHome())
	})

	const header = document.createElement('header')
	header.classList.add('name')
	header.textContent = "Burak's Place"

	const ul = document.createElement('ul')
	ul.classList.add('navbar--list')

	const menuLi = document.createElement('li')
	const menuA = document.createElement('a')
	menuA.id = 'menu'
	menuA.addEventListener('click', () => {
		render()
		content.appendChild(makeMenu())
	})
	menuLi.appendChild(menuA)
	menuA.textContent = 'Menü'

	const aboutUsLi = document.createElement('li')
	const aboutUsA = document.createElement('a')
	aboutUsA.id = 'about'
	aboutUsA.addEventListener('click', () => {
		render()
		content.appendChild(makeAboutUs())
	})
	aboutUsLi.appendChild(aboutUsA)
	aboutUsA.textContent = 'Über Uns'

	ul.appendChild(menuLi)
	ul.appendChild(aboutUsLi)

	navbar.appendChild(logo)
	navbar.appendChild(header)
	navbar.appendChild(ul)

	content.appendChild(navbar)
}

export default makeNavbar
