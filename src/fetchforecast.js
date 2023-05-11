export async function fetchForecastData(city='Salvador Bahia') {
  try {
    const weatherData = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=375d6dfddf9b42a0a1a181450230605&q=${city}&aqi=no&days=3`);
    return await weatherData.json();
  }
  catch(err) {
    console.log("wtf");
  }
}

