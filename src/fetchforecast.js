export async function fetchForecastData(city='Salvador Bahia') {
  try {
    const weatherData = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=375d6dfddf9b42a0a1a181450230605&q=${city}&aqi=no&days=3`, {mode: 'cors'});
    if (weatherData.status == 200) return weatherData.json();
    else throw new Error;
  }
  catch(err) {
    throw new Error(err);
  }
}

