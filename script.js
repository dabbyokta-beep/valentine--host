let step = 0;

function startBook() {
  document.querySelector('.landing').style.display = 'none';
  document.querySelector('.scene').style.display = 'flex';

  const music = document.getElementById('music');
  music.play();

  document.querySelector('.book').addEventListener('click', flipPage);
}

function flipPage() {
  const pages = document.querySelectorAll('.page');

  if (step < pages.length) {
    pages[step].classList.add('flipped');
    step++;
  }
}
