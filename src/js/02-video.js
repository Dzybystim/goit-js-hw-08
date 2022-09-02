import Player from '@vimeo/player'
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_TIME_VIDEO = "videoplayer-current-time";


const timeVideo = function(data) {
    let secondsJSON = JSON.stringify(data.seconds);

    localStorage.setItem(KEY_TIME_VIDEO, secondsJSON), 1000

}

let secondsTime = localStorage.getItem(KEY_TIME_VIDEO)

player.setCurrentTime(secondsTime)


player.on('timeupdate', throttle(timeVideo, 1000));

