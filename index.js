// jshint esversion: 6

// timing constants
const totalTime = 10000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
let cyclesLeft = 5;

// define breathing animation
function breatheAnimation() {
  document.querySelector('#text').innerText = 'Breathe In';
  document.querySelector('.container').className = 'container grow';

  setTimeout(() => {
    document.querySelector('#text').innerText = 'Hold';

    setTimeout(() => {
      document.querySelector('#text').innerText = 'Breathe Out';
      document.querySelector('.container').className = 'container shrink';
    }, holdTime);

  }, breatheTime);

  cyclesLeft--;
  document.querySelector('h3').innerText = cyclesLeft;

}

// play bell tone
function playSound() {
  let audio = new Audio(`aud/bell.mp3`);
  audio.play();
}

breatheAnimation();
playSound();

// run breatheAnimation function and bell every totaTime milliseconds
let cycle = setInterval(() => {
  breatheAnimation();
  playSound();
}, totalTime);

// end breatheAnimation function and bell after 4 cycles
setTimeout(() => {
  clearInterval(cycle);

  setTimeout(() => {
    document.querySelector('.mallet-container').className = 'mallet-container';
    document.querySelector('h3').innerText = '';
    document.querySelector('#text').innerText = 'Well Done';

  }, 10000);

}, 30000);
