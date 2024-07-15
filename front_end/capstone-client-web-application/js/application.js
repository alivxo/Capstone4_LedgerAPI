function showLoginForm() {
	templateBuilder.build('login-form', {}, 'login')
}

function hideModalForm(type) {
	templateBuilder.clear(type)
}

function login() {
	const username = document.getElementById('username').value
	const password = document.getElementById('password').value

	userService.login(username, password)
	hideModalForm('login')
}

function loadHome() {
	templateBuilder.build('home', {}, 'main')

	entryService.search()
}

function editProfile() {
	profileService.loadProfile()
}

function saveProfile() {
	const firstName = document.getElementById('firstName').value
	const lastName = document.getElementById('lastName').value
	const phone = document.getElementById('phone').value
	const email = document.getElementById('email').value
	const address = document.getElementById('address').value
	const city = document.getElementById('city').value
	const state = document.getElementById('state').value
	const zip = document.getElementById('zip').value

	const profile = {
		firstName,
		lastName,
		phone,
		email,
		address,
		city,
		state,
		zip,
	}

	profileService.updateProfile(profile)
}

function setFilter(control) {
	entryService.addFilter(control.value)
	entryService.search()
}

function setMinAmount(control) {
	// const slider = document.getElementById("min-price");
	const label = document.getElementById('min-amount-display')
	label.innerText = control.value

	const value = control.value != 0 ? control.value : ''
	entryService.addMinPriceFilter(value)
	entryService.search()
}

function setMaxAmount(control) {
	// const slider = document.getElementById("min-price");
	const label = document.getElementById('max-amount-display')
	label.innerText = control.value

	const value = control.value != 10000 ? control.value : ''
	entryService.addMaxPriceFilter(value)
	entryService.search()
}

function showNewEntryModal() {
	templateBuilder.build('newEntryForm', {}, 'newEntry')
}

function createEntry() {
	const description = document.getElementById('description').value
	const vendor = document.getElementById('vendor').value
	const amount = document.getElementById('amount').value

	entryService.createEntry(description, vendor, amount)
	hideModalForm('newEntry')
}

function deleteEntry(entryId) {
	entryService.deleteEntry(entryId)
}

function closeError(control) {
	setTimeout(() => {
		control.click()
	}, 3000)
}

document.addEventListener('DOMContentLoaded', () => {
	loadHome()
})
