export default function renderList(berlinEvents) {

	const berlinEvents = document.querySelector('.events');

	berlinEvents.forEach(berlinEvent => {
		const eventElement = document.createElement('.events__event');
		eventElement.innerHTML = `
  				<img class="events__img" src="${data._embedded.events.image.url}" alt="event image">
  				<div class="events__info">
  					<div class="events__date">${data._embedded.events.date}</div>
  					<h3 class="events__name">${data._embedded.events.name}</h3>
  					<div><span class="events__genre">${data._embedded.events.classification.segment.name}</span> - <span class="events__venue">${data._embedded.events.venue}</span></div>
  				</div>
  				<button class="events__tickets">${data._embedded.events.tickets}</button>
		`	
	}); 
	
	//  console.log(data._embedded.events.name);
} 




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




// const eventsImage = document.querySelector('.events__img');
// const eventsDate = document.querySelector('.events__date');
// const eventsName = document.querySelector('.events__name');
// const eventsGenre = document.querySelector('.events__genre');
// const eventsVenue = document.querySelector('.events__venue');
// const eventsTickets = document.querySelector('.events__tickets');



