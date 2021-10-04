import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(function (data) {
    localStorage.setItem("videoplayer-current-time", data);
  }, 1000));


const time = localStorage.getItem("videoplayer-current-time");
const res = time ? time : 0;

player.setCurrentTime(res);
