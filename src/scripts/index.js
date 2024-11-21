import fullpage from 'fullpage-js-geek'; 
import '../pages/index.css';

// scroll page
document.addEventListener("DOMContentLoaded", function () {
    new fullpage("#fullpage", {
      scrollingSpeed: 1000,
      autoScrolling: true,
      navigation: false,
    });
  });