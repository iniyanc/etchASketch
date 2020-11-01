const cont = document.querySelector('#container');

function darken (e) {
    // e.target.classList.add('stage1');
    let style = window.getComputedStyle(e.target);
    let colour = String(style.backgroundColor);

    console.log(colour);

    if (colour.includes('99')) {
        colour = colour.replace('99', '90');
    }
    else {
        colour = colour.slice(0, -2) + (parseInt(colour[colour.length - 2]) - 1) + ')';
    }

    e.target.style.backgroundColor = colour;
}

function newCanvas () {
    let dimension = prompt("Please enter how many squares long you'd like each side to be.");
    const blockSize = 100/dimension;

    const previousBlocks = document.querySelectorAll('.block');
    previousBlocks.forEach(block => block.remove());

    for (let i = 1; i <= dimension ** 2; i++) {
        const newBlock = document.createElement('div');
        newBlock.className = 'block stage0';
        cont.appendChild(newBlock);
    
        newBlock.setAttribute('style', `width: ${blockSize}%; height: ${blockSize}%;`);

        newBlock.addEventListener('mouseover', darken);
    }
}

const btn = document.querySelector('button');
btn.addEventListener('click', newCanvas);