/** 
 * @module animation initialization
 * @description this file describes the animation initialization 
 * functions in the entire section, both the background elements 
 * and the content area of the section 
 */

/**
 * A function for initializing 
 * animations for background elements
 * @param { object } confitAnimation - animation config with parameters for a separate section
 * @param { object } confitElement - animation template for elements
 * @param { number } dalayElement - delay in appearance between elements
 * @param { library } libAnimation - animation library (GSAP) 
 * @param  {...element } elementAnimation - delay in appearance between elements
 */
export const initAimaVectorElems = (
  confitAnimation,
  confitElement,
  dalayElement,
  libAnimation,
  ...elementAnimation
) => {
  let copyDelayElement = dalayElement;
  for (const element of elementAnimation) {
    libAnimation.from(
      element,
      confitAnimation(
        confitElement.delay + copyDelayElement,
        confitElement.time,
        confitElement.vector
      )
    );
    copyDelayElement += dalayElement;
  }
};

/**
 * A function for initializing 
 * animations for content elements
 * @param { object } confitAnimation - animation config with parameters for a separate section
 * @param { object } confitElement - animation template for elements
 * @param { library } libAnimation - animation library (GSAP)
 * @param  {...element } elementAnimation - delay in appearance between elements
 */
export const initAnimOpacityElems = (
  confitAnimation,
  confitElement,
  libAnimation,
  ...elementAnimation
) => {
  for (const element of elementAnimation) {
    libAnimation.from(
      element,
      confitAnimation(confitElement.delay, confitElement.time)
    );
  }
};
