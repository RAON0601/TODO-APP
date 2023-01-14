const weatherUI = document.querySelector("#weather");

function geoSuccessCallback(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((res) => {
      const { name, weather } = res;
      const weatherStatus = weather[0].main;
      weatherUI.innerHTML = `${name} ${weatherStatus}`;
    })
    .catch((err) => (weatherUI.innerHTML = ""));
}

function geoErroCallback() {
  alert("위치 정보 조회 실패");
}

navigator.geolocation.getCurrentPosition(geoSuccessCallback, geoErroCallback);
