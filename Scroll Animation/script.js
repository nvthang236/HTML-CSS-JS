const boxes = document.querySelectorAll('.box');
const triggerBottom = window.innerHeight;

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  boxes.forEach((box) => {
    const boxBottom = box.getBoundingClientRect().bottom;
    if (boxBottom <= triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
