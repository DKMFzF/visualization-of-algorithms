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
import { configFullPage } from "../components/scroll-page.js";
import { 
  configAppElemDownY,
} from "../components/animation.js";
import "../pages/index.css";

gsap.registerPlugin(ScrollTrigger);

// DOM-element
const mainTitle = document.querySelector("#main-title");
const mainSubtitle = document.querySelector("#main-subtitle");
const headerLink = document.querySelectorAll(".header-link");
const bgMain = document.querySelector("#main-container");
const mainContainer = document.querySelector("#hero-section-content");
const canvas = document.querySelector("canvas.webgl");

// penguin
const penguin = document.querySelector("#penguin");
const penguinDialog = document.querySelector("#penguin-diolog");

// value animation
const animationTimeHeaderLink = 0.3;
const animationTimeMainTitle = 0.5;

// init timeline
const tl = gsap.timeline({
  delay: 0.2,
  defaults: {
    ease: "power1.out",
  },
});

// init webgl
const scene = new Scene();
const objectsDistance = 4;
const material1 = new MeshToonMaterial({ color: "#2196F3", transparent: false });
const mesh1 = new Mesh(new TorusGeometry(1, 0.4, 16, 60), material1);
const material2 = new MeshToonMaterial({ color: "#F44336", transparent: false });
const mesh2 = new Mesh(new ConeGeometry(1, 2, 32), material2);
mesh1.castShadow = false;
mesh1.receiveShadow = false;
mesh2.castShadow = false;
mesh2.receiveShadow = false;
mesh1.position.set(3, 2, 0);
mesh2.position.set(-3, -2, 0);
scene.add(mesh1, mesh2);
const sectionMeshes = [mesh1, mesh2];
const particlesCount = 200;
const positions = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount; i++) {
  positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
  positions[i * 3 + 1] =
    objectsDistance * 0.4 -
    Math.random() * objectsDistance * sectionMeshes.length;
  positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
}

// init geometry
const particlesGeometry = new BufferGeometry();
particlesGeometry.setAttribute("position", new BufferAttribute(positions, 3));
const directionalLight = new DirectionalLight("#ffffff", 3);
directionalLight.position.set(1, 1, 0);
scene.add(directionalLight);
const sizes = { width: window.innerWidth, height: window.innerHeight };
const cameraGroup = new Group();
scene.add(cameraGroup);
const camera = new PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 6;
cameraGroup.add(camera);

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// init renderer
const renderer = new WebGLRenderer({
  canvas: canvas,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = false;

// animation webgl
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

// init cursor
const cursor = {};
cursor.x = 0;
cursor.y = 0;
window.addEventListener("mousemove", (e) => {
  cursor.x = e.clientX / sizes.width - 0.5;
  cursor.y = e.clientY / sizes.height - 0.5;
});

// init clock
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

// animation in timeline
tl.from(bgMain, { 
    duration: 0.4, scale: 0, ease: "bounce.out", 
    onComplete: () => {
      mainContainer.classList.add('hover-scale');
    }
  })
  .to(mainTitle, configAppElemDownY(animationTimeMainTitle)) 
  .to(mainSubtitle, configAppElemDownY(animationTimeMainTitle), "-=0.2")
  .to(headerLink, configAppElemDownY(animationTimeHeaderLink, 0.2))
  .to(penguin, { delay: 0.3, duration: 2, y: 50 })
  .to(penguin, { duration: 0.5, y: 80 })
  .to(penguin, { duration: 0.5, y: -80 })
  .to(penguin, { duration: 0.35, y: -20, ease: "bounce.out", })
  .from(penguinDialog, { duration: 0.3, opacity: 0, scale: 0, });

tick();

// init scroll page
(() => new fullpage("#fullpage", configFullPage))();
