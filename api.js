const API_KEY = "dd99dfc5fd7178997d3e321cad4b2e5d";

async function fetchWeather(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    updateUI(data); // this must exist globally
  } catch (error) {
    alert(error.message);
  }
}

function getUserLocationWeather() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
      fetchWeather(url);
    },
    () => alert("Location access denied")
  );
}

function getCityWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  fetchWeather(url);
}

console.log("api loaded")