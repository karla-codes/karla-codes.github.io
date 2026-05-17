import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// Canvas
const canvas = document.querySelector("#c");

// Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 3;
scene.add(camera);

// Load Model
const loader = new GLTFLoader();
// console.log(loader);
loader.load(
  // leave out asset folder from path bc public directory is set to "../assets/" folder
  "/Duck/glTF/Duck.gltf",
  (gltf) => {
    scene.add(gltf.scene.children[0]);
    console.log(gltf.scene.children[0]);
  },
  () => {
    console.log("progress");
  },
  () => {
    console.log("error");
  }
);

/**
 * Lights
 **/
const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
scene.add(ambientLight);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  // update renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Orbit Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Materials
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
});

// Objects (Mesh)
// const sphere = new THREE.Mesh(new THREE.SphereGeometry(), material);
// scene.add(sphere);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
const width = window.innerWidth;
const height = window.innerHeight;
renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const animation = () => {
  const elapsedTime = clock.getElapsedTime();

  // controls.update() required in animation function if controls.enableDamping or controls.autoRotate are set to true
  controls.update();

  // render scene inside animation() to update on each frame
  renderer.render(scene, camera);

  // add at end to run animation() on next frame
  window.requestAnimationFrame(animation);
};

animation();
