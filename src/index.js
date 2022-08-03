import './styles.css'
import './images/background.jpeg'
import makeNavbar from './pages/navbar'
import makeHome from './pages/home'
import makeMenu from './pages/menu'
import makeAboutUs from './pages/aboutUs'

const content = document.getElementById('content')
content.appendChild(makeNavbar())
content.appendChild(makeHome())
content.appendChild(makeMenu())
content.appendChild(makeAboutUs())
