import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

onStartTime();

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(currentTime) {
    console.log(currentTime.seconds);
    localStorage.setItem("videoplayer-current-time", currentTime.seconds);
}

function onStartTime() {
    const onSaveTime = localStorage.getItem("videoplayer-current-time");

    if (onSaveTime) {
        player.setCurrentTime(onSaveTime);
    }
}