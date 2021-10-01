import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(data => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
  }, 1000));

//player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

const time = localStorage.getItem("videoplayer-current-time");
const res = time ? time : 0;

player.setCurrentTime(res);
