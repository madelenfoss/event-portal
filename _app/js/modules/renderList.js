export default function renderList(berlinEvents) {

	const berlinEventsElement = document.querySelector('.events');

	if (berlinEventsElement) {
		berlinEvents.forEach(berlinEvent => {
			renderHTML(berlinEvent)
		});
	}

	function renderHTML(berlinEvent) {
		const eventElement = document.createElement('div');
		const imageElement = document.createElement('img');
		const infoElement = document.createElement('div');
		const dateElement = document.createElement('div');
		const nameElement = document.createElement('h2');
		const genreElement = document.createElement('div');
		const venueElement = document.createElement('div');
		const ticketElement = document.createElement('a');

		eventElement.classList.add('events__event');
		imageElement.classList.add('events__img');
		infoElement.classList.add('events__info');
		dateElement.classList.add('events__date');
		nameElement.classList.add('events__name');
		genreElement.classList.add('events__genre'); //italics
		venueElement.classList.add('events__venue'); // bold
		ticketElement.classList.add('events__tickets');

		imageElement.setAttribute('src', berlinEvent.image);
		imageElement.setAttribute('alt', 'event image');
		ticketElement.setAttribute('href', berlinEvent.tickets);

		dateElement.innerText = `${berlinEvent.date}`;
		nameElement.innerText = `${berlinEvent.eventName}`;
		genreElement.innerText = `${berlinEvent.genre}`;
		venueElement.innerText = `${berlinEvent.venue}`;
		ticketElement.innerText = 'Tickets';

		berlinEventsElement.appendChild(eventElement);

		infoElement.append(
			dateElement,
			nameElement,
			genreElement,
			venueElement
		)

		eventElement.append(
			imageElement,
			infoElement,
			ticketElement
		)	
	}
} 













