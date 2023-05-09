import fetchEvents from "./fetchEvents.js";

export default function filterEvents(berlinEvents) {
	let currentFilter = null;

	// const filterData = fetchEvents(berlinEvents);
	const filterContent = document.querySelector('.events__event');
	const filterToggles = document.querySelectorAll('.filter-buttons__btn');

	for (const toggle of filterToggles) {
		toggle.addEventListener('click', handleFilterToggleClick);

	}

	async function handleFilterToggleClick(event) {
		const allEvents = await fetchEvents();
		toggleFilter(event.target.dataset.filter);
		renderHTML(allEvents);
	}

	function toggleFilter(filter) {
		if (currentFilter === filter) {
			currentFilter = null;
		} else {
			currentFilter = filter;
		}
	}

	function returnFilteredItems(events) {
		if (currentFilter === null) {
			return events;
		} else {
			return events.filter(event => event.genre === currentFilter);
		}
	}


	// renderHTML();

	async function renderHTML(events) {
		filterContent.innerText = '';

		for (const toggle of filterToggles) {
			toggle.classList.remove('filter-buttons__btn--active');

			if (toggle.dataset.filter === currentFilter) {
				toggle.classList.add('filter-buttons__btn--active');
			}
		}

		for (const event of returnFilteredItems(events)) {
			const filterItem = document.createElement('div');

			filterItem.dataset.category = event.genre;
			filterItem.className = 'events__genre' && 'data-category';

			// The wrong way to render data and append to DOM
			filterItem.innerHTML = `
			<img class="events__img" src="${berlinEvents.image}" alt="event image">
			<div class="events__info">
				<div class="events__date">${berlinEvents.date}</div>
				<h3 class="events__name">${berlinEvents.eventname}</h3>
				<div><span class="events__genre" data-category="${berlinEvents.genre}">${berlinEvents.genre}</span>
			 <span> - </span>
			 <span class="events__venue">${berlinEvents.venue}</span></div>
			</div>
			<a target="_blank" href="${berlinEvents.tickets}"><button class="events__tickets">Tickets</button><a/>
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
