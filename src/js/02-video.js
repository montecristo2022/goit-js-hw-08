
import throttle from "lodash.throttle";
const LS_KEY = 'secondOfTime'
const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);


const onPlay = function(data) {
    // data is an object containing properties specific to that event
    localStorage.setItem(LS_KEY, data.seconds)
};

player.on('timeupdate', throttle(onPlay, 1000));




player.setCurrentTime(localStorage.getItem(LS_KEY)).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});





