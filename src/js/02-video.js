import * as Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.default(iframe);

player.on('timeupdate', throttle(function(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));

player.on('loaded', function() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
});
