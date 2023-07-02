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
		// The wrong way to render data and append to DOM, 
		// I'm sorry - will fix this later 
		eventElement.innerHTML = `
  				<img class="events__img" src="${berlinEvent.image}" alt="event image">
  				<div class="events__info">
  					<div class="events__date">${berlinEvent.date}</div>
  					<h2 class="events__name">${berlinEvent.eventName}</h2>
					<div class="events__genre"><em>${berlinEvent.genre}</em></div>
					<div class="events__venue">Venue: <strong>${berlinEvent.venue}</strong></div>
  				</div>
  				<a class="events__tickets" target="_blank" href="${berlinEvent.tickets}">
				Tickets
				<a/>
		`
		berlinEventsElement.appendChild(eventElement);


		// const eventImage = berlinEvent.image;
		// const eventDate = berlinEvent.date;
		// const eventName = berlinEvent.eventname;
		// const eventGenre = berlinEvent.genre;
		// const eventVenue = berlinEvent.venue;
		// const eventTicket = berlinEvent.tickets;

		// const eventElement = document.createElement('div');
		// const imageElement = document.createElement('img');
		// const infoElement = document.createElement('div');
		// const dateElement = document.createElement('div');
		// const nameElement = document.createElement('h3');
		// const genreElement = document.createElement('div');
		// const venueElement = document.createElement('div');
		// const ticketElement = document.createElement('a');

		// eventElement.classList.add('events__event');
		// imageElement.classList.add('events__img');
		// infoElement.classList.add('events__info');
		// dateElement.classList.add('events__date');
		// nameElement.classList.add('events__name');
		// genreElement.classList.add('events__genre');
		// venueElement.classList.add('events__venue');
		// ticketElement.classList.add('events__tickets');

		// imageElement.setAttribute('src', eventImage
		//		.find(image=> image.width > 600)?.url);
		// dateElement.textContent = `${eventDate}`;
		// nameElement.textContent = `${eventName}`;
		// genreElement.textContent = `${eventGenre}`;
		// venueElement.textContent = `${eventVenue}`;
		// ticketElement.textContent = `${eventTicket}`;

		// berlinEventsElement.appendChild(eventElement);
		// eventElement.append(imageElement, infoElement);
		// infoElement.append(eventDate, eventName, eventGenre, eventVenue);
		// berlinEventsElement.appendChild(eventTicket);

	})
} 













