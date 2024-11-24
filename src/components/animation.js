export const configAppElemHeroDownY = (time, staggerTime=0) => {
  return {
    duration: time,
    opacity: 1,
    stagger: staggerTime,
    y: 0,
  };
};

export const configAppElemY = (target) => {
  return {
    scrollTrigger: {
      trigger: target,
    },
    duration: 1,
    y: 0,
  };
};