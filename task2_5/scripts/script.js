"use strict";

const allContent = document.getElementById("all-content");
const mainContent = document.getElementById("main-content");

function checkGeolocationSupport() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      getGeolocationWeatherCurrent,
      errorOutput
    );
  } else {
    const errorElement = document.createElement("h1");
    errorElement.innerText =
      "Sorry, but your browser doesn't support geolocation!";
    mainContent.append(errorElement);
  }
}

function getGeolocationWeatherCurrent(pos) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric&lang=en&appid=2c635de091adc7b86bb67624d5ba7e05`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.name);
      console.log(data.sys.country);
      mainContent.innerHTML = `<header class="header">
          <div class="header header__column">
            <span class="header__text--big-bold">${Math.round(
              data.main.temp
            )}°C</span>
            <span>Feels like ${Math.round(data.main.feels_like)}°C</span>
          </div>
          <div class="header header__column">
            <span class="header__text--bold">${data.weather[0].main}</span>
            <span>${data.name}, ${data.sys.country}</span>
          </div>
          <div class="header header__column">
            <img
              src="https://openweathermap.org/img/wn/${
                data.weather[0].icon
              }@2x.png"
              alt="${data.weather[0].description}"
              title="${data.weather[0].description}"
            />
          </div>
        </header>`;
    });
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric&lang=en&cnt=5&appid=2c635de091adc7b86bb67624d5ba7e05`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      mainContent.innerHTML = `<section class="content">
          <div class="content content__row">
            <span>THU</span>
            <img
              src="./images/icon-broken-clouds.gif"
              alt="Broken clouds"
              title="Broken clouds"
            />
            <span>broken clouds</span>
            <div class="content__column">
              <span>-3°C</span>
              <span>-8°C</span>
            </div>
          </div>
          <div class="content content__row">
            <span>FRI</span>
            <img
              src="./images/icon-light-rain.gif"
              alt="Light rain"
              title="Light rain"
            />
            <span>light rain</span>
            <div class="content__column">
              <span>3°C</span>
              <span>-2°</span>
            </div>
          </div>
          <div class="content content__row">
            <span>SAT</span>
            <img
              src="./images/icon-light-rain.gif"
              alt="Light rain"
              title="Light rain"
            />
            <span>light rain</span>
            <div class="content__column">
              <span>6°C</span>
              <span>2°C</span>
            </div>
          </div>
          <div class="content content__row">
            <span>SUN</span>
            <img
              src="./images/icon-light-rain.gif"
              alt="Light rain"
              title="Light rain"
            />
            <span>light rain</span>
            <div class="content__column">
              <span>3°C</span>
              <span>-1°C</span>
            </div>
          </div>
          <div class="content content__row">
            <span>MON</span>
            <img
              src="./images/icon-light-rain.gif"
              alt="Light rain"
              title="Light rain"
            />
            <span>light rain</span>
            <div class="content__column">
              <span>6°C</span>
              <span>4°C</span>
            </div>
          </div>
        </section>`;
    });
}

function errorOutput() {
  console.log("Error!");
}

checkGeolocationSupport();
