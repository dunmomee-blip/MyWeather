function showTemp(response) {
  console.log(response.data);
  let temp = document.querySelector(".current-temp");
  temp.innerHTML = Math.round(response.data.temperature.current);

  let city = document.querySelector("h1");
  city.innerHTML = response.data.city;
}

function searchTemp(cityName) {
  let apiKey = "25459fa53955o9abff5427602dct03ba";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}`;

  axios.get(apiUrl).then(showTemp);
}

function sayCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector(".form-enter");
  let cityName = cityInput.value;
  let cityDisplay = document.querySelector("h1");
  cityDisplay.innerHTML = cityName;
  searchTemp(cityName);
}

function tellDate() {
  let currentHours = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();
  let currentDay = days[currentTime.getDay()];

  if (currentHours < 10) {
    currentHours = `0${currentHours}`;
  }

  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
}

let cityForm = document.querySelector("#city");
cityForm.addEventListener("submit", sayCity);

let timeElement = document.querySelector("#time");
let currentTime = new Date();
timeElement.innerHTML = `${currentDay}, ${currentHours}:${currentMinutes}`;
