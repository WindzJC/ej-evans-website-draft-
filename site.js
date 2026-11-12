'use strict';
const printButton = document.getElementById('print-sheet');
if (printButton && typeof window.print === 'function') {
  printButton.hidden = false;
  printButton.addEventListener('click', () => window.print());
}
