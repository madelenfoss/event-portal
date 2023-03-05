export default async function fetchEvents() {
	const endpointEvents = 'https://app.ticketmaster.com/discovery/v2/events?apikey=3PgslbneI8EdQweGEK0RAM0Ii9iCL3Rj&locale=*&city=Berlin&countryCode=DE';

	const responses = await Promise.fetch(endpointEvents);
	const result = await Promise.responses.map(response => response.json());
}