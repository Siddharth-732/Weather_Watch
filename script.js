function updateUI(data) {
  document.getElementById("cityname").innerText = data.name;
  document.getElementById("temp").innerText = `${data.main.temp} °C`;
  document.getElementById("humidity").innerText = `${data.main.humidity} %`;
  document.getElementById("wind").innerText = `${data.wind.speed} m/s`;
}

const togglebtn = document.getElementsByClassName('toggle_btn')[0];
const sidebar = document.querySelector("#sidebar")

togglebtn.addEventListener("click", () => {
    console.log("clicked");
  sidebar.classList.toggle("collapsed");
});

// search logic
const searchInput = document.querySelector(".search_box");
// console.log(searchInput);/
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && searchInput.value.trim()) {
    getCityWeather(searchInput.value.trim());
  }
});

// load user weather on startup
getUserLocationWeather();
console.log("script loaded");