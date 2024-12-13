const grid = document.querySelector('#etch-container');

function createGrid(size) {
    // window.location.reload();
    grid.style.display = 'flex';

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
        gridItem.style.opacity = '--op';
        gridItem.addEventListener('mouseover', () => {
            o = getComputedStyle(gridItem).getPropertyValue('--op');
            gridItem.style.backgroundColor = `rgb(241, 136, 5, ${((o*10)+1)/10})`;
            gridItem.style.setProperty('--op', ((o*10)+1)/10)
        })}
}

const button = document.querySelector('#submit')

button.addEventListener('click', () => {
    createGrid(document.querySelector('#number').value)
})
