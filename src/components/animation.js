export const configAppElemDownY = (time, staggerTime=0) => {
  return {
    duration: time,
    opacity: 1,
    stagger: staggerTime,
    y: 0,
  };
};

export const configAppElemYTrigger = (target, time) => {
  return {
    scrollTrigger: {
      trigger: target,
    },
    duration: time,
    y: 0,
  };
};