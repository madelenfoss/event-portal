   export default async function fetchEvents() {
   	const endpoint = 'https://app.ticketmaster.com/discovery/v2/events?apikey=3PgslbneI8EdQweGEK0RAM0Ii9iCL3Rj&locale=*&city=Berlin&countryCode=DE';
   	const response = await fetch(endpoint); 
  	const result = await response.json();

  	console.log(result.data);
 } 




// Name: events.name
// Image: events.images[0] /
// Genre: events.classifications[0] / events.classifications.segment.name
// Venue: events.venues.name
// Tickets: 



