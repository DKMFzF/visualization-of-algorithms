/** 
 * @module init project 
 * @description This module initializes the main components of the 
 * project, including WebGL, GSAP animations, and FullPage.js 
 * functionality. It handles DOM manipulation, event listeners, 
 * WebGL rendering, and scroll-triggered animations.
*/

import {
  Scene,
  MeshToonMaterial,
  Mesh,
  TorusGeometry,
  ConeGeometry,
  BufferGeometry,
  BufferAttribute,
  DirectionalLight,
  PerspectiveCamera,
  WebGLRenderer,
  Group,
  Clock,
} from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fullpage from "fullpage-js-geek";
import { scrollPageConfig } from '../components/scroll-page-config.js';
import {
  initAimaVectorElems,
  initAnimOpacityElems,
} from "../components/animation-fun-element.js";
import {
  configAppElemDownY,
  configAppBg,
  configShowOpacity,
} from "../components/animation-templates.js";
import "../pages/index.css";

gsap.registerPlugin(ScrollTrigger);

// ========== DOM Elements ==========

const mainTitle = document.querySelector("#main-title");
const mainSubtitle = document.querySelector("#main-subtitle");
const headerLink = document.querySelectorAll(".header-link");
const bgMain = document.querySelector("#main-container");
const mainContainer = document.querySelector("#hero-section-content");
const canvas = document.querySelector("canvas.webgl");

/** Bg text elements section Owner for animations */
const textStart = document.querySelector("#text-from");
const textMid = document.querySelector("#text-the");
const textEnd = document.querySelector("#text-author");

/** Owner description elements */
const containerOwnerDiscripter = document.querySelector("#owner-discripter");
const titleOwner = document.querySelector("#title-owner");
const discriptionOwner = document.querySelector("#discription-owner");
const addressOwner = document.querySelector("#address-owner");

/** Penguin and dialog elements */
const penguin = document.querySelector("#penguin");
const penguinDialog = document.querySelector("#penguin-diolog");

// ========== Animation Parameters ==========

/**
 * Animation timings for header and main elements.
 * @constant {number} animationTimeHeaderLink - Animation duration for header links.
 * @constant {number} animationTimeMainTitle - Animation duration for main title.
 * @constant {number} delayOwnerAnimation - Delay for owner animations.
 */
const animationTimeHeaderLink = 0.3;
const animationTimeMainTitle = 0.5;
const delayOwnerAnimation = 0.2;

/** Animation settings for owner background elements */
const animationOwnerBgElement = {
  delay: 0.5,
  time: 1,
  vector: 200,
};

/** Array of elements for background animations */
const arrAnimationOwnerElementBg = [textStart, textMid, textEnd];

/** Configuration for owner content animations */
const confitOwnerContentElement = {
  delay: 1.3,
  time: 1,
};

/** Array of elements for content animations */
const arrAnimationOwnerElementContent = [
  titleOwner,
  discriptionOwner,
  addressOwner,
];

/** GSAP timeline for initial animations */
const tl = gsap.timeline({
  delay: 0.2,
  defaults: { ease: "power1.out" },
});

// ========== WebGL Initialization ==========

/** WebGL scene and objects setup */
const scene = new Scene();
const objectsDistance = 4;
const material1 = new MeshToonMaterial({
  color: "#2196F3",
  transparent: false,
});
const mesh1 = new Mesh(new TorusGeometry(1, 0.4, 16, 60), material1);
const material2 = new MeshToonMaterial({
  color: "#F44336",
  transparent: false,
});
const mesh2 = new Mesh(new ConeGeometry(1, 2, 32), material2);
mesh1.castShadow = false;
mesh1.receiveShadow = false;
mesh2.castShadow = false;
mesh2.receiveShadow = false;
mesh1.position.set(3, 2, 0);
mesh2.position.set(-3, -2, 0);
scene.add(mesh1, mesh2);
const sectionMeshes = [mesh1, mesh2];

/** Create particle system */
const particlesCount = 200;
const positions = new Float32Array(particlesCount * 3);
for (let i = 0; i < particlesCount; i++) {
  positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
  positions[i * 3 + 1] =
    objectsDistance * 0.4 -
    Math.random() * objectsDistance * sectionMeshes.length;
  positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
}

const particlesGeometry = new BufferGeometry();
particlesGeometry.setAttribute("position", new BufferAttribute(positions, 3));

/** Add light to the scene */
const directionalLight = new DirectionalLight("#ffffff", 3);
directionalLight.position.set(1, 1, 0);
scene.add(directionalLight);

const sizes = { width: window.innerWidth, height: window.innerHeight };
const cameraGroup = new Group();
scene.add(cameraGroup);

const camera = new PerspectiveCamera(
  35, 
  sizes.width / sizes.height, 
  0.1, 
  100
);
camera.position.z = 6;
cameraGroup.add(camera);

/**
 * Resize event listener.
 * Updates camera and renderer on window resize.
 */
window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const renderer = new WebGLRenderer({
  canvas: canvas,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = false;

/**
 * Scroll event listener.
 * Updates section and triggers animations.
 */
let scrollY = window.scrollY;
let currentSection = 0;
window.addEventListener("scroll", () => {
  scrollY = window.scrollY;
  const newSection = Math.round(scrollY / sizes.height);
  if (newSection != currentSection) {
    currentSection = newSection;
    gsap.to(sectionMeshes[currentSection].rotation, {
      duration: 1.5,
      ease: "power2.inOut",
      x: "+=6",
      y: "+=3",
      z: "+=1.5",
    });
  }
});

/**
 * Cursor movement event listener.
 * Tracks cursor position for parallax effect.
 */
const cursor = {};
cursor.x = 0;
cursor.y = 0;
window.addEventListener("mousemove", (e) => {
  cursor.x = e.clientX / sizes.width - 0.5;
  cursor.y = e.clientY / sizes.height - 0.5;
});

/**
 * Animation loop.
 * Handles camera movement, mesh rotation, and rendering.
 */
const clock = new Clock();
let previousTime = 0;
const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - previousTime;
  previousTime = elapsedTime;
  camera.position.y = (-scrollY / sizes.height) * objectsDistance;
  const parallaxX = cursor.x * 0.5;
  const parallaxY = -cursor.y * 0.5;
  cameraGroup.position.x +=
    (parallaxX - cameraGroup.position.x) * 5 * deltaTime;
  cameraGroup.position.y +=
    (parallaxY - cameraGroup.position.y) * 5 * deltaTime;

  for (const mesh of sectionMeshes) {
    mesh.rotation.x += deltaTime * 0.1;
    mesh.rotation.y += deltaTime * 0.12;
  }

  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

// ========== Animations and Event Listeners ==========

tl.from(bgMain, {
    duration: 0.4,
    opacity: 0,
    onComplete: () => {
      mainContainer.classList.add("hover-scale");
    },
  })
  .to(mainTitle, configAppElemDownY(animationTimeMainTitle))
  .to(mainSubtitle, configAppElemDownY(animationTimeMainTitle), "-=0.2")
  .to(headerLink, configAppElemDownY(animationTimeHeaderLink, 0.2))
  .to(penguin, { delay: 0.3, duration: 2, y: 50 })
  .to(penguin, { duration: 0.5, y: 80 })
  .to(penguin, { duration: 0.5, y: -80 })
  .to(penguin, { duration: 0.35, y: -20, ease: "bounce.out" })
  .from(penguinDialog, { duration: 0.3, opacity: 0, scale: 0 });

tick();

// ========== init FullPage ==========

(() => {
  new fullpage("#fullpage", {
    scrollingSpeed: scrollPageConfig.SCROLLING_SPEED,
    autoScrolling: scrollPageConfig.AUTO_SCROLLING,
    anchors: scrollPageConfig.ANCHORS,

    // show
    onLeave: (origin, destination, direction) => {
      switch (destination.index) {
        case 0:
          canvas.style.display = 'block';
          break;
        case 1:
          setTimeout(() => {
            canvas.style.display = 'none';
          }, 1000);

          // bg
          initAimaVectorElems(
            configAppBg,
            animationOwnerBgElement,
            delayOwnerAnimation,
            gsap,
            ...arrAnimationOwnerElementBg
          );

          // Side animation of the description appearance
          gsap.from(containerOwnerDiscripter, { duration: 1, height: 0 });

          // content-site
          initAnimOpacityElems(
            configShowOpacity,
            confitOwnerContentElement,
            gsap,
            ...arrAnimationOwnerElementContent
          );
          break;
      }
    },
  });
})();
