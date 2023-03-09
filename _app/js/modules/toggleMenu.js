export default function toggleMenu(collapsibleContainerNode) {
	let isCollapsed = true;


const toggleButton = collapsibleContainerNode.querySelector('.navbar__links-mob-btn');
const contentContainer = collapsibleContainerNode.querySelector('.navbar__links-mob-menu');

if (collapsibleContainerNode !== null) {
	toggleButton.addEventListener('click', handleToggleButtonClick)
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
		contentContainer.classList.remove('.navbar__links-mob-menu--visible');
	} else {
		contentContainer.classList.add('.navbar__links-mob-menu--visible')
	}
 }

}