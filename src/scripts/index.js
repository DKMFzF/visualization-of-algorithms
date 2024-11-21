import fullpage from 'fullpage-js-geek'; 
import { configFullPage } from '../components/scroll-page.js'
import '../pages/index.css';

// scroll page
(() => new fullpage("#fullpage", configFullPage))();