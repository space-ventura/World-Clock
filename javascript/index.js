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

let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
tokyoDateElement.innerHTML = moment().format("MMM Do YYYY");
tokyoTime = moment().tz("Asia/Tokyo");
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss[<small>]A[</small>]");

}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
 <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss[<small>]A[</small>]")}</div>
        </div>
        <a href="/">All Cities</a>
`;
}

let citySelect=document.querySelector("#newCity");
citySelect.addEventListener("change", updateCity);