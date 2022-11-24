'use strict';

//selectors
const container = document.querySelector('.container');
container.style.display = 'grid';
const celije = document.querySelectorAll('.cell');

//napravi grid
const makeGrid = function () {
  let boxNum = prompt('Koliki grid?');
  for (let i = 0; i < boxNum * boxNum; i++) {
    if (boxNum > 50) {
      alert('‼️ Grid cannot exceed 100 cells. Pick a number below 10. ‼️');
      return;
    } else {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.id = 'cell';
      // cell.style.padding = '1rem';
      container.appendChild(cell);
      container.style.gridTemplateColumns = `repeat(${boxNum}, 1fr)`;
    }
  }
};

makeGrid();

celije.forEach((element) => {
  console.log(element);
});

document.querySelectorAll('#cell').forEach((cell) => {
  cell.addEventListener('mouseover', function () {
    cell.style.backgroundColor = '#b7ff4c';
  });
});

//oboji ćeliju prilikom prelaska preko nje
