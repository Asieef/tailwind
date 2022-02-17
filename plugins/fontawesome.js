import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faUserSecret, faCalculator, faLaptopCode, faCog, faArrowRight, 
    faShoppingCart, faArchive, faBusinessTime, faCalendar, faShoppingBag,
    faBars } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faUserSecret, faCalculator, faArchive,
    faArrowRight, faBusinessTime, faCalendar,
    faCog, faLaptopCode, faShoppingCart, faShoppingBag,
    faBars);
Vue.component('font-awesome-icon', FontAwesomeIcon);