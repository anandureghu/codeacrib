// Playing audio
const audio = new Audio("merry-christmas.mp3");

let audioCount = 0;
// Play Music on spacebar click
document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    audioCount += 1;
    if (audioCount % 2 === 0) {
      audio.pause();
    } else {
      audio.play();
    }
  }
};
