function checkGeolocationSupport() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      getGeolocationWeather,
      errorOutput
    );
  } else {
    const body = document.getElementById("body");
    body.innerHTML = "";
    const errorElement = document.createElement("h1");
    errorElement.innerText =
      "Sorry, but your browser doesn't support geolocation!";
    body.append(errorElement);
  }
}

function getGeolocationWeather(pos) {
  fetch;
}

function errorOutput() {
  console.log("Error!");
}

checkGeolocationSupport();
