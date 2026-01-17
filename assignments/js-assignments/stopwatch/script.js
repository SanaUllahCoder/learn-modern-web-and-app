var hoursElement = document.getElementById("hours");
var minutesElement = document.getElementById("minutes");
var secondsElement = document.getElementById("seconds");
var millisecondsElement = document.getElementById("milliseconds");


var hours = 0;
var minutes = 0;
var seconds = 0;
var milli = 0;
var inter = 0;

function startStopwatch() {
    inter = setInterval(function() {
        milli++;
        if (milli >= 100) {
            milli = 0;
            seconds++;
        }
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
        millisecondsElement.innerHTML = milli;
        secondsElement.innerHTML = seconds;
        minutesElement.innerHTML = minutes;
        hoursElement.innerHTML = hours;
    }, 10); // Update every 10 milliseconds for better accuracy
}

function stopStopwatch() {
    clearInterval(inter);
}

function resetStopwatch() {
    clearInterval(inter);
    milli = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    millisecondsElement.innerHTML = milli;
    secondsElement.innerHTML = seconds;
    minutesElement.innerHTML = minutes;
    hoursElement.innerHTML = hours;
}

// Call startStopwatch to begin
startStopwatch();