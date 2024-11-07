const video = document.querySelector("video");

const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const time = document.getElementById("time");
const volume = document.getElementById("volume");

const handlePlayClick = (e) => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};

const handlePlay = () => {
    playBtn.innerText = "Pause";
};
const handlePause = () => {
    playBtn.innerText = "Play";
};

const handleMute = (e) => {};

play.addEventListener("click", handlePlayClick);
mute.addEventListener("click", handleMute);
video.addEventListener("pause", handlePause);
video.addEventListener("play", handlePlay);
