import fetchEvents from "./modules/fetchEvents.js";
import renderList from "./modules/renderList.js";
import backToTop from "./modules/toTopButton.js";
import filterEvents from "./modules/filterEvents.js";
import toggleMenu from "./modules/toggleMenu.js";

backToTop();
renderList(await fetchEvents());
// filterEvents();
// toggleMenu();


