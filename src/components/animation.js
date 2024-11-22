export const configAppElemHeroY = () => {
    return {
        duration: 1,
        y: 0 
    };
}

export const configAppElemY = (target) => {
    return {
        scrollTrigger: {
            trigger: target
        },
        duration: 1,
        y: 0
    };
}