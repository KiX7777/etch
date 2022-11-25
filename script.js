'use strict';

//selectors
const container = document.querySelector('.container');
container.style.display = 'grid';
const celije = document.querySelectorAll('.cell');
const colorpick = document.querySelector('#colorpick');
console.log(colorpick.value);

for (let i = 0; i < 16 * 16; i++) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.id = 'cell';
  cell.style.border = '0.5px solid #333';
  container.appendChild(cell);
  container.style.gridTemplateColumns = `repeat(16, 1fr)`;
  // cell.style.transition = '0.2s all';
  container.style.transition = '0.2s all';

  document.querySelectorAll('#cell').forEach((cell) => {
    cell.addEventListener('mouseover', function () {
      cell.style.backgroundColor = '#b7ff4c';
    });
  });
}
// cell.style.padding = '1rem';
// container.style.gridTemplateColumns = `repeat(16, 1fr)`;

//očisti grid

const clearGrid = function () {
  document.querySelectorAll('#cell').forEach((cell) => {
    cell.remove();
  });
};

//napravi grid
const makeGrid = function () {
  let boxNum = prompt(
    'How big grid do you want ? Number represents number of columns and rows in a grid.'
  );
  if (!boxNum) {
    return;
  } else clearGrid();
  for (let i = 0; i < boxNum * boxNum; i++) {
    if (boxNum > 50) {
      alert('‼️ Grid cannot exceed 100 cells. Pick a number below 10. ‼️');
      return;
    } else {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.id = 'cell';
      cell.style.border = '0.5px solid #333';
      cell.style.transition = '0.1s all';
      container.appendChild(cell);

      container.style.gridTemplateColumns = `repeat(${boxNum}, 1fr)`;
      hoverColor();
    }
  }
};

//oboji ćeliju prilikom prelaska preko nje
const hoverColor = function () {
  document.querySelectorAll('#cell').forEach((cell) => {
    cell.addEventListener('mouseover', function () {
      cell.style.backgroundColor = `${colorpick.value}`;
    });
  });
};
