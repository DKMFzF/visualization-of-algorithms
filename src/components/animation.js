export const configAppElemHeroY = () => {
  return {
    duration: 1,
    y: 0,
  };
};

export const configAppElemX = (target) => {
  return {
    duration: 1,
    x: 0
  };
}

export const configAppElemXreverseLeft = (target) => {
  return {
    delay: 0.1,
    duration: 1,
    x: -100
  };
}

export const configAppElemXreverseRigth = (target) => {
  return {
    duration: 1,
    x: 100
  };
}

export const configAppElemY = (target) => {
  return {
    scrollTrigger: {
      trigger: target,
    },
    duration: 1,
    y: 0,
  };
};