function openHeart() {
  document.querySelector('.landing').style.display = 'none';
  document.querySelector('.content').style.display = 'block';
  createHearts();
}

function toggleText(card) {
  card.querySelector('.short')?.classList.toggle('hidden');
  card.querySelector('.full')?.classList.toggle('hidden');
}

function toggleMusic() {
  const music = document.getElementById('music');
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function createHearts() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = '🤍';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (3 + Math.random() * 3) + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 500);
}