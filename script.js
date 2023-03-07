let myDateVariable = new Date()
let myDateVariableAsAString = myDateVariable.toDateString()
let hours = myDateVariable.getHours()
let minutes = myDateVariable.getMinutes()
let seconds = myDateVariable.getSeconds()

let section = document.getElementById("date")

section.innerHTML = myDateVariableAsAString + "<h1>Hours: " + hours + "</h1>" + "Minutes: " + minutes + "Seconds: " + seconds


setTimeout(function () {
  window.location.reload();
}, 1000);
