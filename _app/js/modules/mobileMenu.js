export default function menuToggle(menuToggleContainer) {
	let isCollapsed = true;

	const toggleButton = menuToggleContainer.querySelector('.filter-buttons-mobile__sort');
	const menuContent = menuToggleContainer.querySelector('.filter-buttons-mobile__labels');

	if (menuToggleContainer !== null) {
		toggleButton.addEventListener('click', handleToggleButtonClick);
	}

	function handleToggleButtonClick(event) {
		toggleCollapsed();
		renderHTML();
	}

	function toggleCollapsed() {
		isCollapsed = !isCollapsed;
	}

	function renderHTML() {
		if (isCollapsed === true) {
			menuContent.classList.remove('.filter-buttons-mobile__labels--visible');
		} else {
			menuContent.classList.add('.filter-buttons-mobile__labels--visible')
		}
	}
}