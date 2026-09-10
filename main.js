'use strict'
const games = document.querySelector('.games')
const genreContainer = document.querySelector('.genres') 
let genreChips
const searchForm = document.querySelector('.form-s')
const overlay = document.querySelector('.overlay')
const modalCont = document.querySelector('.modal-container')
const modalTitle = document.querySelector('.modal-container h2')
const modalClose = document.querySelector('.modal-close')
const modalBlockImg = document.querySelector('.modal-block-img')
const modalBlockInfo = document.querySelector('.modal-block-info')
const searchInput = searchForm.querySelector('input')
const sliderbar = document.querySelector('.sliderbar')
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const dots = document.querySelectorAll('.dot')
let left = 0, timerId
const cartBtns = document.querySelectorAll('.cart-btn')
const cartDropdown = document.querySelector('.cart-dropdown')
const cartItemsList = document.querySelector('.cart-items')
const cartEmptyMsg = document.querySelector('.cart-empty-msg')
const cartTotal = document.querySelector('.cart-total')
let cart = []
function renderCart() {
    cartItemsList.innerHTML = ''
    let totalPrice = 0
    if (cart.length === 0) {
        cartEmptyMsg.style.display = 'block'
        cartTotal.style.display = 'none' 
    } else {
        cartEmptyMsg.style.display = 'none'
        cartTotal.style.display = 'block' 
        cart.forEach((gameTitle, index) => {
            const listItem = document.createElement('li')
			const listItemP = document.createElement('p')
			const listItemB = document.createElement('button')
			const gameInfo = gameTitle.split('/')
            const priceWithCurrency = gameInfo[1]
            let priceValue = 0
            if (priceWithCurrency !== 'Free') {
                const priceString = priceWithCurrency.replace(/\s/g, '').replace('₸', '')
                priceValue = parseInt(priceString)
            }
            totalPrice += priceValue
            
            listItem.textContent = gameInfo[0]
			listItemP.textContent = priceWithCurrency 
			listItemB.textContent = 'X'
			listItemB.classList.add('cart-items-button', 'global-close')
			listItemB.addEventListener('click', () => {
				cart.splice(index, 1)
				renderCart()
			})
            cartItemsList.appendChild(listItem)
			listItem.appendChild(listItemP)
			listItemP.appendChild(listItemB)
        })
    }
    cartTotal.textContent = `Итого: ${addPriceSpaces(totalPrice.toString().replace(/[^0-9]/g, ''))}`
}
function addToCart(gameTitle, price) {
	const shortTitle = gameTitle.length > 17 ? gameTitle.substring(0, 17) + '...' : gameTitle
    const isGameInCart = cart.some(item => item.startsWith(shortTitle + '/'))
    if (!isGameInCart) {
        cart.push(shortTitle + '/' + addPriceSpaces(price))
        renderCart()
    } else {
        alert(`Игра "${gameTitle}" уже в корзине.`) 
    }
}
function getAllGenres(data) {
    const allGenres = new Set()
    for (const key in data) {
        const genres = data[key].genre.split(' / ')
        genres.forEach(genre => allGenres.add(genre.trim()))
    }
    const sortedGenres = ['Все', ...Array.from(allGenres).sort()]
    return sortedGenres
}
function renderGenreChips() {
    const genres = getAllGenres(objData)
    let output = ''
    genres.forEach((genre, index) => {
        const activeClass = index === 0 ? ' active' : ''
        output += `<div class='chip${activeClass}' data-genre='${genre}'>${genre}</div>`
    })
    genreContainer.innerHTML = output
    genreChips = document.querySelectorAll('.genres .chip')
}
function filterByGenre(selectedGenre) {
    let filteredGames = Object.entries(objData)

    if (selectedGenre !== 'Все') {
        filteredGames = filteredGames.filter(gameTit => {
            const gameGenres = gameTit[1].genre
            return gameGenres.includes(selectedGenre)
        })
    }

    renderBlocks(filteredGames)
}
function renderBlocks(arrGoods) {
	let output = ''
	for (let elem of arrGoods) {
		output += `
			<div class='game' data-key='${elem[0]}'>
				<img src='${elem[1].img}' alt='Image'>
				<div class='value'>
					<span>${addPriceSpaces(elem[1].price)}</span>
					${ratingColor(elem[1].rating)}
				</div>
			</div>
		`
	} 
	games.innerHTML = output
	blockEvents()
}
function blockEvents() {
	const game = document.querySelectorAll('.game')
		game.forEach(item => item.addEventListener('click', (e) => {
			let target = e.target.closest('.game')
			renderModalInfo(target.dataset.key)
			left = 0
			sliderbar.style.left = left + 'px'
			activeColor() 
			autoSlide()
			modalCont.classList.add('modal-open')	
			document.body.style.overflow = 'hidden'
			overlay.style.display = 'block'
	}))
}



function renderModalInfo(key) {
	let output = ''
	for (let i = 1; i < 4; i++) {
		output += `
			<div class='slide'>
				<img src='img/${key}/${i}.jpg' alt=''>
			</div>
		`
	}
	sliderbar.innerHTML = output
	modalTitle.textContent = objData[key].title
	modalBlockInfo.innerHTML = `
		<div class='img-rating'>
			<img src='${objData[key].img}' alt=''>
			${ratingColor(objData[key].rating)}
		</div>
        <p class='modal-desc'>${objData[key].desc}</p>
		<p class='modal-genre'>${modalGenre(objData[key].genre)}</p>
		<p>Издатель: ${objData[key].publisher}</p>
		<div class='price-menu'>
			<p>Купить ${objData[key].title}</p>
			<div class='purchase'>
				<p>${addPriceSpaces(objData[key].price)}</p>
				<button class='steam-cart-btn' data-game-key='${key}'>В корзину</button>
			</div>
		</div>
	`
	const addToCartBtn = modalBlockInfo.querySelector('.steam-cart-btn')
    addToCartBtn.addEventListener('click', () => {
        const gameKey = addToCartBtn.dataset.gameKey
        const gameData = objData[gameKey]
		console.log(addToCartBtn.dataset)
        addToCart(gameData.title, gameData.price)
		modalCont.classList.remove('modal-open')
		overlay.style.display = 'none'
		document.body.style.overflow = ''
		clearTimeout(timerId)
    })
}
function ratingColor(rating) {
	const ratingSpan = document.createElement('span')
	let classRating
	if (rating >= 7) {
		classRating = 'rating-green'
	} else if (rating >= 3.9) {
		classRating = 'rating-yellow'
	} else {
		classRating = 'rating-red'
	}
	return `<span class='rat-gl ${classRating}'>${rating.toFixed(1)}</span>`
}

genreContainer.addEventListener('click', function(e) {
    const target = e.target.closest('.chip')
    if (target) {
        genreChips.forEach(c => c.classList.remove('active'))
        target.classList.add('active')
        const selectedGenre = target.dataset.genre
        filterByGenre(selectedGenre)
    }
})

function addPriceSpaces(price) {
	if (price == '0') return 'Free'
    let priceStr = typeof price === 'number' ? price.toString() : price

	if (priceStr.length <= 3) return priceStr + '₸'
	let arr = priceStr.split('').reverse()
	for (let i = 3; i <= arr.length; i += 4) {
		arr.splice(i, 0, ' ')
	}
	let ret = arr.reverse().join('')
	return ret += '₸'
}

function searchGame(event) {
	event.preventDefault()
	const cleanedInput = searchInput.value.toLowerCase().replace(/[^a-zA-Z0-9А-Яа-яЁё]/g, '') 
    const findGame = Object.entries(objData).filter((gameTit) => {
        const gameM = gameTit[1]
        return gameM.title.toLowerCase().replace(/[^a-zA-Z0-9А-Яа-яЁё]/g, '').includes(cleanedInput)
    })
	genreChips.forEach(c => c.classList.remove('active'))
    document.querySelector('.chip[data-genre="Все"]').classList.add('active')
	renderBlocks(findGame)
}
function modalGenre(genre) {
	let arr = genre.split(' / ')
	let output = ''
	arr.forEach(item => output += `<span>${item}</span>`)
	return output
}
function autoSlide() {
	clearTimeout(timerId)
	timerId = setTimeout(slideRight, 2200)
}
function slideRight() {
	left -= 600
	if (left < -1200) left = 0
	sliderbar.style.left = left + 'px'
	activeColor()
	autoSlide()
}
function slideLeft() {
	left += 600
	if (left > 0) left = -1200
	sliderbar.style.left = left + 'px'
	activeColor()
	autoSlide()
}

function activeSlide(num) {
	left = num * -600
	sliderbar.style.left = left +'px'
	activeColor()
	autoSlide()
}

function activeColor() {
	dots.forEach(item => item.classList.remove('active'))
	dots[left / -600].classList.add('active')
}
dots.forEach((item, index) => {
	item.addEventListener('click', () => {
		activeSlide(index)
	})
})
cartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        cartDropdown.classList.toggle('open')
        e.stopPropagation() 
    })
})
searchForm.addEventListener('submit', searchGame)
searchInput.addEventListener('input', searchGame)
modalClose.addEventListener('click', () => {
	modalCont.classList.remove('modal-open')
	overlay.style.display = 'none'
	document.body.style.overflow = ''
	clearTimeout(timerId)
})
arrowRight.addEventListener('click', slideRight)
arrowLeft.addEventListener('click', slideLeft)
renderGenreChips()
renderBlocks(Object.entries(objData))
renderCart()