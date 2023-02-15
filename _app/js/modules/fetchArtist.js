export default async function fetchArtist() {
	const endpointArtist = '';

	const responses = await Promise.fetch(endpointArtist);
	const result = await Promise.responses.map(response => response.json());
}