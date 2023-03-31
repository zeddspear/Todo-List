import { renderStaticPage } from "./scripts/staticPage/loadStatic";

import './style/style.css'

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import { startEvents } from "./scripts/DynamicPage/EventsListeners";
import { storageControl } from "./scripts/ObjectHandlers/storage";

// apending static page into div with class content in html file
const content = document.querySelector('.content');

renderStaticPage(content);


// render data from local storage if available 
storageControl.initiate();

// add eventListeners to all interactive elements on generated static page
startEvents();

