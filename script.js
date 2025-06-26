// Your code here.
const cubes = document.querySelectorAll('.cube');
let selectedCube = null;
let offsetX, offsetY;

cubes.forEach(cube => {
	cube.addEventListener('mousedown', (e) => {
		selectedCube = cube;
		offsetX = e.clientX - cube.getBoundingClientRect().left;
		offsetX = e.clientY - cube.getBoundingClientRect().top;
	})
});
