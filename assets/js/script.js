function liveClock() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var currentMinute  = currentTime.getMinutes();
    var am = "PM";

    if(currentHour < 12) {
        am = "AM";
    }
    if(currentHour > 12) {
        currentHour = currentHour - 12;
    }
    
    if(currentMinute < 10) {
        currentMinute = "0" + currentMinute;
    }

    document.getElementById("hour").innerHTML = currentHour + ':' + currentMinute;
    document.getElementById("am-pm").innerHTML = am;
    document.getElementById("day").innerHTML = currentTime.toLocaleDateString("en-US", {month: "short", day: "numeric", year: "numeric"});
    setTimeout(clock, 1000);
}
liveClock();