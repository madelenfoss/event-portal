   export default async function fetchEvents() {
		
   	const endpoint = 'https://app.ticketmaster.com/discovery/v2/events?apikey=3PgslbneI8EdQweGEK0RAM0Ii9iCL3Rj&locale=*&size=200&city=Berlin&countryCode=DE';
   	const response = await fetch(endpoint); 
  		const result = await response.json();

		const allEvents = result._embedded.events.map(event => {
			return {
				image: event.images[0].url,
				date: event.dates.start.localDate,
				eventName: event.name,
				genre: event.classifications[0].segment.name,
				venue: event._embedded.venues[0].name,
				tickets: event.url
			}
		})

		console.log(allEvents);
		return allEvents;
	
	// console.log(result._embedded);
  	// return result._embedded;
 } 









