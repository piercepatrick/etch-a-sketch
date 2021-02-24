const gridContainer = document.getElementById("gridContainer");
const sizeButton = document.getElementById("sizeButton");
const resetButton = document.getElementById("resetButton");

resetButton.addEventListener('click', () => location.reload());
let size = 16;
window.addEventListener('load', makeRows(size));
sizeButton.addEventListener('click', changeSize);
resetButton.addEventListener('click', resetGame);

function makeRows() 
{
    gridContainer.setAttribute('style','grid-template-columns:repeat('+size+',1fr);grid-template-rows:repeat('+size+',1fr);');
    for (i = 0; i < size*size; i++)
    {
        let square = document.createElement('div');
        square.className = 'gridItem';
        gridContainer.appendChild(square);
        square.addEventListener('mouseover', changeColor);
    }

}

function changeSize() 
{
    let newGrid = prompt("Please Enter a New Size For Your Grid. 1-64");
    if (newGrid >= 1 && newGrid <= 64)
    {
        clearGrid();
        size = newGrid;
        makeRows();
    }
    else
    {
        alert('Enter a Number from 1-64!!');
    }
}

function changeColor(box) 
{
    const Color1 = Math.floor(Math.random() * 256);
    const Color2 = Math.floor(Math.random() * 256);
    const Color3 = Math.floor(Math.random() * 256);
    box.target.style.background = `rgb(${Color1}, ${Color2}, ${Color3})`;
}

function clearGrid() 
{
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
        gridContainer.removeChild(element);
    });
}
