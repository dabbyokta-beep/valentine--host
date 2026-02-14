function openHeart() {
  document.querySelector('.landing').style.display = 'none';
  document.querySelector('.content').style.display = 'block';
}

function toggleMusic() {
  const music = document.getElementById('music');
  music.paused ? music.play() : music.pause();
}

function openLetter(card) {
  card.querySelector('.letter-closed').classList.add('hidden');
  card.querySelector('.letter-open').classList.remove('hidden');
}
