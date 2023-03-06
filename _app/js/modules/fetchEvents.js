 export default async function fetchEvents() {
 	const endpointEvents = 'https://app.ticketmaster.com/discovery/v2/events?apikey=3PgslbneI8EdQweGEK0RAM0Ii9iCL3Rj&locale=*&city=Berlin&countryCode=DE';


 	const response = await Promise(fetch(endpointEvents)); 
	const result = await Promise(response => response.json());

	return result.data.events;
 }

// Name: events.name
// Image: events.images[0] /
// Genre: events.classifications[0] / events.classifications.segment.name
// Venue: events.venues.name
// Tickets: 









// forEach API data















// From youtube tutorial, traditional function
// export default function fetchEvents() {
// 	fetch('https://app.ticketmaster.com/discovery/v2/events?apikey=3PgslbneI8EdQweGEK0RAM0Ii9iCL3Rj&locale=*&city=Berlin&countryCode=DE').then((data) => {
// 		return data.json();
// 	}).then((completedata) => {
// 		let data1="";
// 		completedata.map((values) => {
// 			data1+= `
// 			<div class="events__event">
// 					<img class=${values.image} src="" alt="event image">
// 					<div class="events__info">
// 						<div class="events__date">${values.date}</div>
// 						<h3 class="events__name">${values.name}</h3>
// 						<div><span class="events__genre">${values.genre}</span> - <span class="events__venue">Venue</span></div>
// 					</div>
// 					<button class="events__tickets">${values.tickets}</button>
// 				</div>
// 			`
// 		});
// 		document.getElementById("events").innerHTML = data1;


// 	}).catch()

// }
