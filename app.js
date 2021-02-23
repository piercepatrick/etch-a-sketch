const gridContainer = document.getElementById("gridContainer");

let size = 16;

window.addEventListener('load', makeRows(size));

function makeRows(size) 
{
    gridContainer.setAttribute('style','grid-template-columns:repeat('+size+',1fr);grid-template-rows:repeat('+size+',1fr);');
    for (i = 0; i < size*size; i++)
    {
        let square = document.createElement('div');
        square.className = 'gridItem';
        square.style.border = '1px solid rgb(0, 0, 0)';
        gridContainer.appendChild(square);
        square.addEventListener('mouseover', changeColor);
    }

}

function changeSize() 
{

}

function changeColor(box) 
{
    const Color1 = Math.floor(Math.random() * 256);
    const Color2 = Math.floor(Math.random() * 256);
    const Color3 = Math.floor(Math.random() * 256);
    box.target.style.background = `rgb(${Color1}, ${Color2}, ${Color3})`;
}

function resetGame()
{

}
