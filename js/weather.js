const API_KEY = "f65fa6705e5730deea16ddfc0d4ba3f9";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city = document.querySelector("#weather span:last-child");
        const weather = document.querySelector("#weather span:first-child");
        city.innerText= data.name;
        weather.innerText = data.weather[0].main;
})};

function onGeoError() {
    alert("Can't find your location.")  // 위치 확인 불가한 경우 
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);