const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let activeCount = 1;

next.addEventListener('click', () => {
  if (activeCount < circles.length) {
    activeCount++;
  }

  updateProgress();
});

prev.addEventListener('click', () => {
  if (activeCount > 0) {
    activeCount--;
  }

  updateProgress();
});

function updateProgress() {
  circles.forEach((circle, index) => {
    if (index < activeCount) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  progress.style.width = ((activeCount - 1) / (circles.length - 1)) * 100 + '%';

  if (activeCount === 1) {
    prev.disabled = true;
    next.disabled = false;
  } else if (activeCount === circles.length) {
    prev.disabled = false;
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
