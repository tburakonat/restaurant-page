const makeAboutUs = () => {
	const aboutUs = document.createElement('div')
	aboutUs.classList.add('about-us')

	const h2 = document.createElement('h2')
	h2.textContent = 'Über Uns'

	const content = document.createElement('div')
	content.classList.add('about-us-content')

	const firstH3 = document.createElement('h3')
	firstH3.textContent = 'Qualität steht ganz oben!'

	const firstP = document.createElement('p')
	firstP.textContent =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nobis quas minus quodnecessitatibus corporis! Quos consequatur ex reiciendis quia quae debitis unde! Commodi solutasimilique quo nulla blanditiis vitae.'

	const secondH3 = document.createElement('h3')
	secondH3.textContent = 'Sauberkeit ist uns wichtig!'

	const secondP = document.createElement('p')
	secondP.textContent =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nobis quas minus quodnecessitatibus corporis! Quos consequatur ex reiciendis quia quae debitis unde! Commodi solutasimilique quo nulla blanditiis vitae.'

	const thirdH3 = document.createElement('h3')
	thirdH3.textContent = 'Wir sind ein Ort zum Genießen!'

	const thirdP = document.createElement('p')
	thirdP.textContent =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nobis quas minus quodnecessitatibus corporis! Quos consequatur ex reiciendis quia quae debitis unde! Commodi solutasimilique quo nulla blanditiis vitae.'

	content.appendChild(firstH3)
	content.appendChild(firstP)
	content.appendChild(secondH3)
	content.appendChild(secondP)
	content.appendChild(thirdH3)
	content.appendChild(thirdP)
	aboutUs.appendChild(h2)
	aboutUs.appendChild(content)

	return aboutUs
}

export default makeAboutUs
