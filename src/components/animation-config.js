export const configAppElemDownY = (time, staggerTime = 0) => {
  return {
    duration: time,
    opacity: 1,
    stagger: staggerTime,
    y: 0,
  };
};

export const configAppBg = (delay, time, vector) => {
  return {
    delay: delay,
    duration: time,
    y: vector,
  };
};

export const configShowOpacity = (delay, time) => {
  return {
    delay: delay,
    duration: time,
    opacity: 0,
  };
};
