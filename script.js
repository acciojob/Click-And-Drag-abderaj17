const cubes = document.querySelectorAll('.cube');
let selectedCube = null;
let offsetX, offsetY;

cubes.forEach(cube => {
    cube.addEventListener('mousedown', (e) => {
        selectedCube = cube;
        offsetX = e.clientX - cube.getBoundingClientRect().left;
        offsetY = e.clientY - cube.getBoundingClientRect().top;
    });
});

document.addEventListener('mousemove', (e) => {
    if (selectedCube) {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        
        // Calculate new position
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        // Boundary checking to keep the cube within the container
        if (newX < containerRect.left) newX = containerRect.left;
        if (newY < containerRect.top) newY = containerRect.top;
        if (newX + selectedCube.offsetWidth > containerRect.right) {
            newX = containerRect.right - selectedCube.offsetWidth;
        }
        if (newY + selectedCube.offsetHeight > containerRect.bottom) {
            newY = containerRect.bottom - selectedCube.offsetHeight;
        }

        // Update cube position
        selectedCube.style.left = newX + 'px';
        selectedCube.style.top = newY + 'px';
    }
});

document.addEventListener('mouseup', () => {
    selectedCube = null; // Release the cube
});