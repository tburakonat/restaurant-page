import './styles.css'
import './images/background.jpeg'
import makeNavbar from './pages/navbar'
import makeHome from './pages/home'

document.getElementById('content')

window.addEventListener('load', () => {
	makeNavbar()
	content.appendChild(makeHome())
})
