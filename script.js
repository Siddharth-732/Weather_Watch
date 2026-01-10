function updateUI(data) {
  document.getElementById("weather").innerHTML = data.weather[0].description;
  document.getElementById("cityname").innerText = data.name;
  document.getElementById("temp").innerText = `${data.main.temp} °C`;
  document.getElementById("humidity").innerText = `${data.main.humidity} %`;
  document.getElementById("wind").innerText = `${data.wind.speed} m/s`;
  
  document.querySelectorAll(".card").forEach(card => {
  card.classList.remove("fade");
  void card.offsetWidth; // reflow
  card.classList.add("fade");
});

  const condition = data.weather[0].main.toLowerCase();

if (condition.includes("cloud")) {
  document.body.style.background =
    "linear-gradient(135deg, #64748b, #94a3b8)";
} else if (condition.includes("rain")) {
  document.body.style.background =
    "linear-gradient(135deg, #0f172a, #1e293b)";
} else if (condition.includes("clear")) {
  document.body.style.background =
    "linear-gradient(135deg, #0ea5e9, #22d3ee)";
}

}

const togglebtn = document.getElementsByClassName('toggle_btn')[0];
const sidebar = document.querySelector("#sidebar")

togglebtn.addEventListener("click", () => {
    console.log("clicked");
  sidebar.classList.toggle("collapsed");
});

// search logic
const searchInput = document.querySelector(".search_box input");
// console.log(searchInput);/
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && searchInput.value.trim()) {
    getCityWeather(searchInput.value.trim());
  }
});
document.querySelectorAll(".search-results li").forEach(item => {
  item.addEventListener("click", () => {
    getCityWeather(item.innerText);
  });
});

// load user weather on startup
getUserLocationWeather();
console.log("script loaded");