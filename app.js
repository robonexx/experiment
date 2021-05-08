//Wanted to try out threejs I think it looks awesome with the 3d effects
// threejs.org for documentation
// create a scene


// refactor
let camera, scene, renderer, cube;
 
function init() {
    scene = new THREE.Scene();

    // using perspective camera
    // setting the camera perspedctive
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    
    // webGL for 2d 3d grafix
    renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);
    
    
    const geometry = new THREE.BoxGeometry(2, 2, 2);

    const texture = new THREE.TextureLoader().load('boxedin.jpg')

    const material = new THREE.MeshBasicMaterial({ map: texture });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
     
    camera.position.z = 5;

}



function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

function onWindowResize() {

    // set the aspect ratio
    camera.aspect = window.innerWidth / window.innerHeight;
	// After making changes to aspect
	camera.updateProjectionMatrix();
	// Reset size
	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
