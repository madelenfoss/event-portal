   export default async function fetchEvents() {
		
   	const endpoint = 'https://app.ticketmaster.com/discovery/v2/events?apikey=3PgslbneI8EdQweGEK0RAM0Ii9iCL3Rj&locale=*&size=200&city=Berlin&countryCode=DE';
   	const response = await fetch(endpoint); 
  		const result = await response.json();

		const allData = result._embedded.events.map(data => {
			return {
				image: data.image[0].url,
				date: data.dates.start.localDate,
				name: data.name,
				genre: data.classifications[0].segment.name,
				venue: data._embedded.venues[0].name,
				tickets: data.url
			}
		})
		console.log(allData);
		console.log(result._embedded);
  	// return result._embedded;
 } 









