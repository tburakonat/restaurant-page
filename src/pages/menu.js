const makeMenu = () => {
	const menu = document.createElement('div')
	menu.classList.add('menu')

	const h2 = document.createElement('h2')
	h2.textContent = 'Unser Menü'

	const categories = document.createElement('div')
	categories.classList.add('categories')
	for (let i = 0; i < 4; i++) {
		const category = document.createElement('div')
		category.classList.add('category')
		categories.appendChild(category)

		const h3 = document.createElement('h3')
		h3.textContent = 'Hot Food'
		category.appendChild(h3)

		for (let i = 0; i < 4; i++) {
			const food = document.createElement('div')
			food.classList.add('food')
			category.appendChild(food)
		}
	}
	menu.appendChild(h2)
	menu.appendChild(categories)

	return menu
}

export default makeMenu
