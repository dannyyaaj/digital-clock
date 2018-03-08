
function clock() {

  let fullDate = new Date();
  let hours = fullDate.getHours();
  let mins = fullDate.getMinutes() + 3;
  let secs = fullDate.getSeconds();
  let amPM = (hour > 11) ? "PM" : "AM";
  
  if (hours > 12) {
    hours -= 12;
  }
  else if (hours === 0) {
    hours = 12;
  }
  else if (hours < 10) {
    hours = "0" + hours;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }

  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = ": " + mins;
  document.getElementById("second").innerHTML = ": " + secs + " " + amPM;

};

setInterval(clock,1000);