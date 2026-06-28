const apikey = "653dda2913fba955a58062dfe2b1c2c4"; // Replace with your API key
let input_box = document.body.querySelector("#int");

input_box.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const city = input_box.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const weather_box = document.body.querySelector(".box");
        weather_box.innerHTML = `
        
<h2 class="city">${data.name}</h2>

<img class="weather-icon"
src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png">

<h1 class="temp">${Math.round(data.main.temp)}°C</h1>

<p class="description">${data.weather[0].description}</p>

<div class="details">

<div class="row">
<span>🌡 Temperature</span>
<span>${data.main.temp}°C</span>
</div>

<div class="row">
<span>🔥 Feels Like</span>
<span>${data.main.feels_like}°C</span>
</div>

<div class="row">
<span>💧 Humidity</span>
<span>${data.main.humidity}%</span>
</div>

<div class="row">
<span>💨 Wind Speed</span>
<span>${data.wind.speed} m/s</span>
</div>

<div class="row">
<span>👁 Visibility</span>
<span>${data.visibility / 1000} km</span>
</div>

</div>
`;
      })
      .catch((error) => {
        const msg = document.body.querySelector(".box");
        msg.innerHTML =
          "<span style='color:red; font-weight:bold;'>City Not Found!</span>";
      });

    input_box.value = "";
  }
});
