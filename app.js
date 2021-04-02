var seconds = 00;
var minutes = 00;
var milli = 00;

var stopminutes = document.getElementById("minutes");
var stopseconds = document.getElementById("seconds");
var stopmilli = document.getElementById("milli")
var buttonstart = document.getElementById("start");
var buttonstop = document.getElementById("stop");
var buttonreset = document.getElementById("reset")



function starttimer()
{
    milli++
    if (milli < 9) {
        stopmilli.innerHTML= "0" + milli;
    }
    if (milli > 9) {
      stopmilli.innerHTML = milli;  
    }
    if (milli > 100) {
        seconds++;
        stopseconds.innerHTML= "0" + seconds;
        milli = 0;
        stopmilli.innerHTML = "0" + 0;
        
    }
    if (seconds > 9) {
        stopseconds.innerHTML=seconds;
    }
    if (seconds > 60) {
        minutes++;
        stopminutes.innerHTML="0"+minutes;
        seconds = 0;
        stopseconds.innerHTML = "0"+0;
        
    }
    if (minutes > 9) {
        stopminutes.innerHTML = minutes;
    }
}

buttonstart.onclick = function () {
    interval = setInterval(starttimer);
}

buttonstop.onclick = function(){
    clearInterval(interval);
}

buttonreset.onclick = function(){
    clearInterval(interval);
    milli = "00";
    seconds = "00";
    minutes = "00";
    stopmilli.innerHTML = milli;
    stopseconds.innerHTML = seconds;
    stopminutes.innerHTML = minutes;
}
