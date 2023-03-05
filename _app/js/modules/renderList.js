export default function renderList(events) {
	const eventList = document.querySelector('.events');

	events.forEach(event => {
		const eventElement = document.createElement('.events__event');
		eventElement.textContent = `
		<img class="events__img" src="" alt="">
		<div class="events__info">
			<div class="events__date">Date</div>
			<h3 class="events__name">Event name</h3>
			<div><span class="events__genre">Genre</span> - <span class="events__venue">Venue</span></div>
		</div>
		<button class="events__tickets">Tickets</button>
		`
	})

	// YOUTUBE TUTORIAL
	// events.forEach(event => {
	// 	const eventElement = document.createElement('.events__event');
	// 	eventElement.innerHTML += `
	// 	<img class="events__img" src="" alt="">
	// 	<div class="events__info">
	// 		<div class="events__date">Date</div>
	// 		<h3 class="events__name">Event name</h3>
	// 		<div><span class="events__genre">Genre</span> - <span class="events__venue">Venue</span></div>
	// 	</div>
	// 	<button class="events__tickets">Tickets</button>
	// 	`
	// })

}




// const eventsImage = document.querySelector('.events__img');
// const eventsDate = document.querySelector('.events__date');
// const eventsName = document.querySelector('.events__name');
// const eventsGenre = document.querySelector('.events__genre');
// const eventsVenue = document.querySelector('.events__venue');
// const eventsTickets = document.querySelector('.events__tickets');



