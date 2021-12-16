// Playing audio
const audio = new Audio("merry-christmas.mp3");

// Play Music on click
container.addEventListener("click", e => {
    audio.play();
});

//  pause music on double click
container.addEventListener("dblclick", e => {
    audio.pause();
});