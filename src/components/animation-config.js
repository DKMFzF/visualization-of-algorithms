/** 
 * @module animation template module
 * @description This code block is an animation module that 
 * contains several templates for customizing the animation 
 * of elements on a web page. Each template defines animation 
 * parameters such as duration, delay, and direction of movement. 
 */


/**
 * Animation template: moving an element up, 
 * followed by its appearance
 * @param { number } time - animation execution time
 * @param { number } staggerTime - delay for multiple elements to appear
 * @returns { object } - animation template object
 */
export const configAppElemDownY = (time, staggerTime = 0) => {
  return {
    duration: time,
    opacity: 1,
    stagger: staggerTime,
    y: 0,
  };
};

/**
 * Animation template taking into account the Y vector, 
 * the animation will lift the element up
 * @param { number } delay - setting up the animation
 * @param { number } time - animation execution time
 * @param { number } vector - Animation direction (Y)
 * @returns 
 */
export const configAppBg = (delay, time, vector) => {
  return {
    delay: delay,
    duration: time,
    y: vector,
  };
};

/**
 * Template for animation template: the appearance of an element
 * @param { number } delay - setting up the animation
 * @param { number } time - animation execution time
 * @returns 
 */
export const configShowOpacity = (delay, time) => {
  return {
    delay: delay,
    duration: time,
    opacity: 0,
  };
};
