   import { apiToken } from "../env.js";
	export default async function fetchEvents() {
		
   	const endpoint = `https://app.ticketmaster.com/discovery/v2/events?${apiToken}&locale=*&size=200&city=Berlin&countryCode=DE`;
   	const response = await fetch(endpoint); 
		//test

		// try catch starts here

  		const result = await response.json();

		const allEvents = result._embedded.events.map((event) => {
			return {
				image: event.images.find((image)=> image.width > 600)?.url,
				date: event.dates.start.localDate,
				eventName: event.name,
				genre: event.classifications[0].segment.name,
				venue: event._embedded.venues[0].name,
				tickets: event.url
			};
		});

		// catch error goes here

		return allEvents;	
 } 









