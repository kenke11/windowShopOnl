import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import forms from "./modules/forms";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {};
    let deadline = '2021-04-05';

    changeModalState(modalState);
    modals();
    tabs('.glazed-slider','.glazing-block', '.glazing-content', 'active');
    tabs('.decoration-slider', '.no-click', '.decoration-content > div > div', 'after_click');
    tabs('.balcon-icons', '.balcon-icons-img', '.big-img > img', 'do-image-more', 'inline-block')
    forms(modalState);
    timer('.container1', deadline);
})