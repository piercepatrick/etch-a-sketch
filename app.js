const gridContainer = document.getElementById("gridContainer");

let size = 16;

window.addEventListener('load', makeRows(size));

function makeRows(size) 
{
    gridContainer.setAttribute('style','grid-template-columns:repeat('+size+',1fr);grid-template-rows:repeat('+size+',1fr);');
    for (i = 0; i < size*size; i++)
    {
        const div = document.createElement('div');
        div.className = 'gridItem';
        div.style.border = '1px solid rgb(0, 0, 0)';
        gridContainer.appendChild(div);
    }

}

function changeSize() 
{

}

function changeColor() 
{

}

function resetGame()
{

}
