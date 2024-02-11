console.log('timer script is loaded');

const timer = document.querySelector('#timer')
const newDate = new Date();
const nowTime = newDate.getTime();
const timerStart = newDate.setHours(0, 0, 0, 0);
const timerEnd = newDate.setDate(newDate.getDate() + 1);

function getFormatedTime(timeStamp) {
  const hours = Math.floor((timeStamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeStamp % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeStamp % (1000 * 60)) / 1000);
  return (hours.toString().padStart(2, "0") + ":" +
    minutes.toString().padStart(2, "0") + ":" +
    seconds.toString().padStart(2, "0"));
}

timer.textContent = getFormatedTime(timerEnd - nowTime);

const countdown = () => setInterval(() => {
  const rightNow = new Date().getTime();
  timer.textContent = getFormatedTime(timerEnd - rightNow);
}, 1000);

countdown();