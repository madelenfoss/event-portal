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
  					<h3 class="events__name">${berlinEvent.eventname}</h3>
  					<div><span class="events__genre">${berlinEvent.genre}</span>
					<span> - </span>
					<span class="events__venue">${berlinEvent.venue}</span></div>
  				</div>
  				<a target="_blank" href="${berlinEvent.tickets}"><button class="events__tickets">Tickets</button><a/>
		`
		berlinEventsElement.appendChild(eventElement);
	})

	 console.log(berlinEvents);
} 


// Lage en function?


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





