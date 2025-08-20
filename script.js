async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "7b4c3b74b40b09b780454962014539f6"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById("weatherInfo").innerHTML = "City not found!";
      return;
    }

    const weather = `
      <p><strong>Location:</strong> ${data.name}, ${data.sys.country}</p>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Condition:</strong> ${data.weather[0].main}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;

    document.getElementById("weatherInfo").innerHTML = weather;
  } catch (error) {
    console.error("Error fetching weather:", error);
    document.getElementById("weatherInfo").innerHTML = "Something went wrong!";
  }
}
