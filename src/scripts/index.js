import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fullpage from 'fullpage-js-geek'; 
import { configFullPage } from '../components/scroll-page.js';
import { 
    configAppElemHeroY,
    configAppElemY
} from '../components/animation.js';
import '../pages/index.css';

gsap.registerPlugin(ScrollTrigger);

// DOM-element
const mainTitle = document.querySelector('#main-title');
const mainSubtitle = document.querySelector('#main-subtitle');

// init animation
const tl = gsap.timeline({
    delay: 0.2,
    defaults: {
        ease: "power1.out"
    }
});

tl.to(mainTitle, configAppElemHeroY())
    .to(mainSubtitle, configAppElemHeroY());

// init scroll page
(() => new fullpage("#fullpage", configFullPage))();
