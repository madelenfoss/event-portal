import fetchEvents from "./modules/fetchEvents.js";
import renderList from "./modules/renderList.js";
import backToTop from "./modules/toTopButton.js";
import Navigation from "./modules/toggleMenu.js";

Navigation();
backToTop();
renderList(await fetchEvents());




