const elForm = document.querySelector("#form");
const elInput = document.querySelector("#input");
const elCards = document.querySelector(".cards");

// get Data

const API_KEY = `c67e3943b1537eb384b2ac2193719538`;

const getData = async (city) => {
  const base = `https://api.openweathermap.org/data/2.5/weather`;
  const query = `?q=${city}&units=metric&appid=${API_KEY}`;

  const request = await fetch(base + query);
  const data = await request.json();
  return data;
};

// addEventListener

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const cityName = elInput.value.trim();

  getData(cityName).then((data) => updateUI(data));
  elForm.reset();
});

// updateUI

function updateUI(weather) {
  elCards.innerHTML = `<div class="card">
    <img
      width="150"
      height="150"
      src="https://picsum.photos/200/300"
      alt="image"
      class="img"
    />
    <div class="box">
      <h2 class="cityname">${weather.name}, ${weather.sys.country}</h2>
      <h4 class="weather">${weather.weather[0].main}</h4>
      <h4 class="graduce">Temperature: ${weather.main.temp} 'C</h4>
      <h4 class="wind">Speed of wind: ${weather.wind.speed} m/s</h4>
    </div>
  </div>`;
}
