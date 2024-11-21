import fullpage from 'fullpage-js-geek'; 
import { configFullPage } from '../components/scroll-page.js';
import { appearanceElementY } from '../components/animation.js';
import '../pages/index.css';

// DOM-element
const titlePage = document.querySelector('#title-page');

// init animation
appearanceElementY(titlePage);

// init scroll page
(() => new fullpage("#fullpage", configFullPage))();

