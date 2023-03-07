import { fetchEvents } from "./modules/fetchEvents.js";
import renderList from "./modules/renderList.js";
import backToTop from "./modules/toTopButton.js";

backToTop();
fetchEvents();
renderList();


