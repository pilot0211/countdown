const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const newYear = '1 Jan 2023';
function countdown (){
    const currentDate = new Date();
    const newYearDate = new Date(newYear);
    const timeleft = (newYearDate-currentDate)/1000;
    const days = Math.floor(timeleft/3600/24)
    const hours = Math.floor(timeleft/3600%24)
    const mins = Math.floor(timeleft/60%60)
    const seconds = Math.floor(timeleft%60)

    daysEl.innerHTML = days
    hoursEl.innerHTML = hours
    minsEl.innerHTML = mins
    secondsEl.innerHTML = seconds
}
countdown()
setInterval(countdown, 1000)