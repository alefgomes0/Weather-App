export async function fetchWeatherData(city='Salvador Bahia') {
  try {
    const weatherData = await fetch(`http://api.weatherapi.com/v1/current.json?key=375d6dfddf9b42a0a1a181450230605&q=${city}&aqi=no`, {mode: 'cors'});
    if (weatherData.status == 200) return weatherData.json();
    throw new Error;
  }
  catch(err) {
    throw new Error(err);
  }
}
