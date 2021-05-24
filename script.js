/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key

  //CODE GOES HERE
  let userPromise = fetch(`${URL}?q=${city}&appid=${API_KEY}&units=imperial`);
  console.log(userPromise);
  userPromise
    .then((response) => {
      return response.json();
    })
    .then((resData) => {
      console.log(resData);
      showWeatherData(resData);
    });
};

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById("city-input").value;
  // CODE GOES HERE
  getWeatherData(city);
};

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (resData) => {
  //CODE GOES HERE
  document.getElementById("city-name").innerText = resData.name;
  document.getElementById("weather-type").innerText = resData.weather[0].main;
  document.getElementById("temp").innerText = resData.main.temp;
  document.getElementById("min-temp").innerText = resData.main.temp_min;
  document.getElementById("max-temp").innerText = resData.main.temp_max;
};
