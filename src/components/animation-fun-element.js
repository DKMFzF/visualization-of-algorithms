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
