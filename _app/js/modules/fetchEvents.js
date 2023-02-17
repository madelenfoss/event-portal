export default async function fetchEvents() {
	const endpointEvents = '';

	const responses = await Promise.fetch(endpointEvents);
	const result = await Promise.responses.map(response => response.json());
}