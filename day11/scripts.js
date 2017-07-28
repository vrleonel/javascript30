/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const rages = player.querySelector('.player__slider');

/* Build out functions*/

function togglePlay() {
  // if(video.paused) {
  //   video.play();
  // } else {
  //   video.pause();
  // }

  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
 const icon = video.paused ? '►' : '❚❚';
 toggle.textContent = icon;  
  
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);


toggle.addEventListener('click', togglePlay);
