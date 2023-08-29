function updateTime() {

let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
losAngelesDateElement.innerHTML = moment().format("MMM Do YYYY");
losAngelesTime = moment().tz("America/Los_Angeles");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss[<small>]A[</small>]");

let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
parisDateElement.innerHTML = moment().format("MMM Do YYYY");
parisTime = moment().tz("Europe/Paris");
parisTimeElement.innerHTML = parisTime.format("h:mm:ss[<small>]A[</small>]");

}
updateTime();
setInterval(updateTime, 1000);