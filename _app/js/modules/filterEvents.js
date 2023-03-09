import fetchEvents from "./fetchEvents.js";

export default function filterEvents() {
	let currentFilter = null;

	const filterData = fetchEvents();
	const filterContent = document.querySelector('.events__event');
	const filterToggles = document.querySelector('.filter-buttons__btn');

	for (const toggle of filterToggles) {
		toggle.addEventlistener('click', handleFilterToggleClick);

	}

	function handleFilterToggleClick(event) {
		toggleFilter(event.target.dataset.filter);
		renderHTML();
	}

	function toggleFilter(filter) {
		if (currentFilter === filter) {
			currentFilter = null;
		} else {
			currentFilter = filter;
		}
	}

	function returnFilteredItems() {
		if (currentFilter === null) {
			return filterData;
		} else {
			return filterData.filter(event => event.classifications[0].segment.name === currentFilter);
		}
	}

	renderHTML();

	function renderHTML() {
		filterContent.innerHTML = '';

		for (const toggle of filterToggles) {
			toggle.classList.remove('filter-buttons__btn--active');

			if (toggle.dataset.filter === currentFilter) {
				toggle.classList.add('filter-buttons__btn--active');
			}
		}

		for (const event of returnFilteredItems()) {
			const filterItem = document.createElement('div');

			filterItem.dataset.category = event.classifications[0].segment.name;
			filterItem.className = 'events__genre';
			filterItem.innerHTML = `
			<img class="events__img" src="${berlinEvent.image}" alt="event image">
			<div class="events__info">
				<div class="events__date">${berlinEvent.date}</div>
				<h3 class="events__name">${berlinEvent.eventname}</h3>
				<div><span class="events__genre">${berlinEvent.genre}</span>
			 <span> - </span>
			 <span class="events__venue">${berlinEvent.venue}</span></div>
			</div>
			<a target="_blank" href="${berlinEvent.tickets}"><button class="events__tickets">Tickets</button><a/>
 `
		}
	}
}

// genre: event.classifications[0].segment.name






// All: data.classifications[0].segment.name
// Music: data.classifications[0].segment.name === 'Music'
// Sport: data.classifications[0].segment.name === 'Sports'
// Music: data.classifications[0].segment.name === 'Arts & Theatre'
// Music: data.classifications[0].segment.name === 'Comedy'
// Music: data.classifications[0].segment.name === 'Miscellaneous'
