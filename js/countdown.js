//Ace League Manager//
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const nextRacing = "24 Jul 2022 21:30:00 GMT-0300";

function countdown(){
    const nextRacingDate = new Date(nextRacing);
    const currentDate = new Date();

    const totalSeconds = (nextRacingDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor(totalSeconds / 3600) %24;
    const mins = Math.floor(totalSeconds /60) %60;
    const seconds = Math.floor(totalSeconds) %60;
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}
function formatTime(time){
    return time < 10 ? `0${time}` :time;
}
countdown();
setInterval(countdown,1000);


//Copa ace Season 2//
const daysEl2 = document.getElementById("days2");
const hoursEl2 = document.getElementById("hours2");
const minsEl2 = document.getElementById("mins2");
const secondsEl2 = document.getElementById("seconds2");

const nextRacing2 = "13 Jul 2022 21:30:00 GMT-0300";

function countdown2(){
    const nextRacingDate2 = new Date(nextRacing2);
    const currentDate2 = new Date();

    const totalSeconds2 = (nextRacingDate2 - currentDate2) / 1000;

    const days2 = Math.floor(totalSeconds2 / 3600 /24);
    const hours2 = Math.floor(totalSeconds2 / 3600) %24;
    const mins2 = Math.floor(totalSeconds2 /60) %60;
    const seconds2 = Math.floor(totalSeconds2) %60;
    
    daysEl2.innerHTML = days2;
    hoursEl2.innerHTML = formatTime(hours2);
    minsEl2.innerHTML = formatTime(mins2);
    secondsEl2.innerHTML = formatTime(seconds2);
}
function formatTime2(time2){
    return time2 < 10 ? `0${time2}` :time2;
}

countdown2();
setInterval(countdown2,1000);

var rightcountdown2 = document.getElementById("rightcountdown2");
var rightcountdown = document.getElementById("rightcountdown");
var leftcountdown = document.getElementById("leftcountdown");
var leftcountdown2 = document.getElementById("leftcountdown2");

document.getElementById("buttonCountdown").addEventListener('click', () => {
    leftcountdown2.classList.toggle('hide-block');
    rightcountdown2.classList.toggle('hide-flex');
    leftcountdown.classList.toggle('off');
    rightcountdown.classList.toggle('off');
  })
