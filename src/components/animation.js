import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const appearanceElementY = (target) => {
    gsap.to(target, {
        scrollTrigger: target,
        duration: 1.5,
        y: 0
    });
};