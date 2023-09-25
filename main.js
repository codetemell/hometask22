
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let clearBtn = document.querySelector("#clear");
let hour = document.querySelector("#hour");
let minut = document.querySelector("#minut");
let second = document.querySelector("#second");

let h = 0;
let m = 0;
let s = 0;
let intervalId;

let start = startBtn.onclick = () => {
     intervalId=setInterval(() => {
    if (s < 59) {
      if (s < 9) {
        s++;
        second.innerHTML = `0${s}`;
      } else {
        s++;
        second.innerHTML = s;
      }
    } else {
      if (m < 59) {
        m++;
        minut.innerHTML = m;
        s = 0;
        second.innerHTML = `0${s}`;
      } else {
        m = 0;
        minut.innerHTML = `0${m}`;
        h++;
        hour.innerHTML = h;
        s = 0;
        second.innerHTML = `0${s}`;
      }
    }
  }, 1000);
};

clearBtn.onclick = () => {
    clearInterval(intervalId);
    h = 0;
    m = 0;
    s = 0;
    hour.innerHTML = `0${h}`;
    minut.innerHTML = `0${m}`;
    second.innerHTML = `0${s}`;
  };
  stopBtn.onclick = () => {
    clearInterval(intervalId);
  };