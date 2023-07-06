
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const seconds = document.querySelector('.seconds');
const start = document.querySelector('.start');
const restart = document.querySelector('.restart');
const pause = document.querySelector('.pause');

let sec = 0;
let min = 0;
let ho = 0;

seconds.textContent = 0;
minute.textContent = 0;
hour.textContent = 0;



start.addEventListener('click', () => {
    sec++;
    seconds.textContent = sec;
    function move() {
        sec++;
        seconds.textContent = sec;

        let clockTimer;
        if (clockTimer) {clearInterval(clockTimer)};

        if(sec > 59) {
            sec = 0;
            seconds.textContent = 0;
            min++;
            minute.textContent = min;
        };

         if(min > 59 ) {
            min = 0;
            minute.textContent = 0;
            ho++;
            hour.textContent = ho;
        };

         if(ho > 23) {
            ho = 0;
            hour.textContent = ho;
        };
        
    };
        clockTimer = setInterval(move, 1000);
})

 pause.addEventListener('click', () => {
    clearInterval(clockTimer);
})

restart.addEventListener('click', () => {
    location.reload();
})