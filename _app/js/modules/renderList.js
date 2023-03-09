export default function renderList(berlinEvents) {

	const berlinEventsElement = document.querySelector('.events');
	console.log(berlinEvents)
	berlinEvents.forEach(berlinEvent => {
		const eventElement = document.createElement('div');
		eventElement.classList.add('events__event');
		eventElement.innerHTML = `
  				<img class="events__img" src="${berlinEvent.image}" alt="event image">
  				<div class="events__info">
  					<div class="events__date">${berlinEvent.date}</div>
  					<h3 class="events__name">${berlinEvent.eventName}</h3>
					<div class="events__genre">${berlinEvent.genre}</div>
					<div class="events__venue">${berlinEvent.venue}</div>
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

	 console.log(berlinEvents);
} 

// const eventImage = berlinEvent.image;
// const eventDate = berlinEvent.date;
// const eventName = berlinEvent.eventname;
// const eventGenre = berlinEvent.genre;
// const eventVenue = berlinEvent.venue;
// const eventTicket = berlinEvent.tickets;

// const eventElement = document.createElement('div');
// eventElement.classList.add('events__event');

// const imageElement = document.createElement('img');
// imageElement.classList.add('events__img');
// imageElement.setAttribute('src', eventImage.find(image=> image.width > 600)?.url);

// const infoElement = document.createElement('div');
// infoElement.classList.add('events__info');

// const dateElement = document.createElement('div');
// dateElement.classList.add('events__date');
// dateElement.textContent = `${eventDate}`;

// const nameElement = document.createElement('h3');
// nameElement.classList.add('events__name');
// nameElement.textContent = `${eventName}`;

// const genreElement = document.createElement('div');
// genreElement.classList.add('events__genre');
// genreElement.textContent = `${eventGenre}`;

// const venueElement = document.createElement('div');
// venueElement.classList.add('events__venue');
// venueElement.textContent = `${eventVenue}`;


// berlinEventsElement.appendChild(eventElement);
// eventElement.append(imageElement, infoElement);
// infoElement.append(eventDate, eventName, eventGenre, eventVenue);
// berlinEventsElement.appendChild(eventTicket);

// Lage en function?
		// const eventImage = berlinEvent.image;
		// console.log(eventImage)

		//  const imageElement = document.createElement('img');
		//  imageElement.classList.add('events__img');
		//  imageElement.setAttribute('src', eventImage.find(image=> image.width > 600)?.url);

		// 	berlinEventsElement.appendChild(imageElement);


// <img class="events__img" src="${berlinEvents.events.image[0].url}" alt="event image">
// <div class="events__info">
// 	<div class="events__date">${berlinEvents.events.date}</div>
// 	<h3 class="events__name">${berlinEvents.events.name}</h3>
// 	<div><span class="events__genre">${berlinEvents.events.classification[0].segment.name}</span>
//  <span> - </span>
//  <span class="events__venue">${berlinEvents.events._embedded.venues[0]}</span></div>
// </div>
// <button class="events__tickets">${berlinEvents.events.tickets}</button>


// const eventsImage = document.querySelector('.events__img');
// const eventsDate = document.querySelector('.events__date');
// const eventsName = document.querySelector('.events__name');
// const eventsGenre = document.querySelector('.events__genre');
// const eventsVenue = document.querySelector('.events__venue');
// const eventsTickets = document.querySelector('.events__tickets');







// From youtube tutorial, traditional function
//  export default function fetchEvents() {
// 		fetch('https://app.ticketmaster.com/discovery/v2/events?apikey=3PgslbneI8EdQweGEK0RAM0Ii9iCL3Rj&locale=*&city=Berlin&countryCode=DE').then((data) => {
//  		return data.json();
//  	}).then((completedata) => {
//  		let data1="";
//  		completedata.map((data) => {
//  			data1+= `
//  			<div class="events__event">
//  					<img class=${data.events.image} src="" alt="event image">
//  					<div class="events__info">
//  						<div class="events__date">${data.events.date}</div>
//  						<h3 class="events__name">${data.events.name}</h3>
//  						<div><span class="events__genre">${data.events.classification.segment.name}</span> - <span class="events__venue">Venue</span></div>
//  					</div>
//  					<button class="events__tickets">${values.tickets}</button>
//  				</div>
//  			`
//  		});
//  		document.getElementById("events").innerHTML = data1;

//  	}).catch(error)

// }





