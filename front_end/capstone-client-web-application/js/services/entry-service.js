let entryService

class EntryService {
	filter = {
		description: undefined,
		vendor: undefined,
		minAmount: undefined,
		maxAmount: undefined,
		customReport: undefined,
		queryString: () => {
			let qs = ''
			if (this.filter.description) {
				const desc = `description=${this.filter.description}`
				if (qs.length > 0) {
					qs += `&${desc}`
				} else {
					qs = desc
				}
			}
			if (this.filter.vendor) {
				const vend = `vendor=${this.filter.vendor}`
				if (qs.length > 0) {
					qs += `&${vend}`
				} else {
					qs = vend
				}
			}
			if (this.filter.minAmount) {
				const minA = `minAmount=${this.filter.minAmount}`
				if (qs.length > 0) {
					qs += `&${minA}`
				} else {
					qs = minA
				}
			}
			if (this.filter.maxAmount) {
				const maxA = `maxAmount=${this.filter.maxAmount}`
				if (qs.length > 0) {
					qs += `&${maxA}`
				} else {
					qs = maxA
				}
			}
			if (this.filter.customReport) {
				const fil = `customReport=${this.filter.customReport}`
				if (qs.length > 0) {
					qs += `&${fil}`
				} else {
					qs = fil
				}
			}

			return qs.length > 0 ? `?${qs}` : ''
		},
	}

	addMinPriceFilter(price) {
		if (price == 0 || price == '') this.clearMinAmountFilter()
		else this.filter.minAmount = price
	}
	addMaxPriceFilter(price) {
		if (price == 0 || price == '') this.clearMaxAmountFilter()
		else this.filter.maxAmount = price
	}
	addFilter(filter) {
		if (filter == '') this.clearFilter()
		else this.filter.customReport = filter
	}

	clearMinAmountFilter() {
		this.filter.minAmount = undefined
	}
	clearMaxAmountFilter() {
		this.filter.maxAmount = undefined
	}
	clearFilter() {
		this.filter.customReport = undefined
	}

	search() {
		const url = `${config.baseUrl}/entries${this.filter.queryString()}`

		axios
			.get(url)
			.then(response => {
				let data = {
					entries: response.data.map((entry, index) => ({
						...entry,
						index: index + 1, // If you want 1-based index
					})),
					length: response.data.length,
				}

				templateBuilder.build('entries', data, 'content')
			})
			.catch(error => {
				const data = {
					error: 'Searching entries failed.',
				}

				templateBuilder.append('error', data, 'errors')
			})
	}

	createEntry(description, vendor, amount) {
		const url = `${config.baseUrl}/entries`
		console.log(description, vendor, amount)
		axios
			.post(url, {
				withCredentials: false, // This helps with CORS issues if credentials are needed
				headers: {
					'Content-Type': 'application/json',
					// Add any other necessary headers here, e.g., authentication tokens
				},
				entryId: 0,
				description: description,
				vendor: vendor,
				amount: amount,
			})
			.then(response => {
				this.search()
			})
			.catch(error => {
				const data = {
					error: `Failed to create entry`,
				}

				templateBuilder.append('error', data, 'errors')
			})
	}

	deleteEntry(entryId) {
		const url = `${config.baseUrl}/entries/${entryId}`

		axios
			.delete(url, {
				withCredentials: false, // This helps with CORS issues if credentials are needed
				headers: {
					'Content-Type': 'application/json',
					// Add any other necessary headers here, e.g., authentication tokens
				},
			})
			.then(response => {
				this.search()
			})
			.catch(error => {
				const data = {
					error: `Failed to delete entry ${entryId}`,
				}

				templateBuilder.append('error', data, 'errors')
			})
	}
}

document.addEventListener('DOMContentLoaded', () => {
	entryService = new EntryService()
})
