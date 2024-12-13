const grid = document.querySelector('#etch-container');

function createGrid(size) {
    // window.location.reload();

    if (size < 16 || size > 100) {
        alert('Please input a number between 16 and 100');
        return 0;
    }

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    for (let i = 0; i < size*size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('etch-square');
        gridItem.style.cssText = `flex-basis: calc(100%/${size});`
        grid.appendChild(gridItem);
        gridItem.addEventListener('mouseover', () => {
        gridItem.style.backgroundColor = '#F18805'
        })}
}

const button = document.querySelector('#submit')

button.addEventListener('click', () => {
    createGrid(document.querySelector('#number').value)
})
