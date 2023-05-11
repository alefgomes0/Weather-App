import { fetchWeatherData } from "./fetchweather.js";
import { fetchForecastData } from "./fetchforecast.js";

export async function displayWeatherData(city) {
  const cityInfo = fetchWeatherData(city);
  const weatherForecast = fetchForecastData(city);
  const allWeatherInfo = await Promise.all([cityInfo, weatherForecast]);

  const displayTemp = document.querySelector(".temp-measure");

  console.log(allWeatherInfo);

  function showCityName() {
    const weatherWrapper = document.createElement("div");
    weatherWrapper.classList.add("current-weather-wrapper");
    const div = document.createElement("div");
    div.classList.add("city-name");

    const h2 = document.createElement("h2");
    h2.textContent = `${allWeatherInfo[0].location.name}`;
    const h5 = document.createElement("h5");
    h5.textContent = `${allWeatherInfo[0].location.region}, ${allWeatherInfo[0].location.country}`;

    div.appendChild(h2);
    div.appendChild(h5);
    weatherWrapper.appendChild(div);

    document.querySelector(".main-content").appendChild(weatherWrapper);

    const localDay = document.createElement("h4");
    const dayAndTime = allWeatherInfo[0].location.localtime.split(" ");
    localDay.classList.add("local-day");
    localDay.textContent = dayAndTime[0];
    div.appendChild(localDay);

    const localTime = document.createElement("h4");
    localTime.classList.add("local-time");
    div.appendChild(localTime);

    const [hours, minutes] = dayAndTime[1].split(":");
    // create a Date object with the current date and the local time
    let clockTime = new Date();
    clockTime.setHours(hours);
    clockTime.setMinutes(minutes);

    // update the clock every second
    setInterval(() => {
      clockTime.setSeconds(clockTime.getSeconds() + 1);
      const formattedTime = clockTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      localTime.textContent = formattedTime;
    }, 1000);
  }
  showCityName();

  
  function showCurrentWeather() {
    const weatherWrapper = document.querySelector(".current-weather-wrapper");
    const div = document.createElement("div");
    div.classList.add("city-weather");

    const currentTemperature = document.createElement("div");
    currentTemperature.classList.add("current-temperature");

    const temperature = document.createElement("h2");
    const conditionIcon = new Image();
    conditionIcon.src = allWeatherInfo[0].current.condition.icon;

    const weatherCondtion = document.createElement("h5");
    weatherCondtion.classList.add("weather-condition");
    weatherCondtion.textContent = allWeatherInfo[0].current.condition.text;
    const feelsLike = document.createElement("h4");
    feelsLike.classList.add("feels-like");
    
    const labelFeels = document.createElement("h5");
    labelFeels.classList.add("label-feels");
    labelFeels.textContent = "Feels Like";

    const label = document.createElement("h5");
    label.classList.add("label");
    label.textContent = "Min / Max ";
    const minMaxTemp = document.createElement("h4");
    minMaxTemp.classList.add("min-max-temp");

    sessionStorage.setItem("tempC", allWeatherInfo[0].current.temp_c);
    sessionStorage.setItem("feelsC", allWeatherInfo[0].current.feelslike_c);
    sessionStorage.setItem("currentMinC", allWeatherInfo[1].forecast.forecastday[0].day.mintemp_c);
    sessionStorage.setItem("currentMaxC", allWeatherInfo[1].forecast.forecastday[0].day.maxtemp_c);

    sessionStorage.setItem("tempF", allWeatherInfo[0].current.temp_f);
    sessionStorage.setItem("feelsF", allWeatherInfo[0].current.feelslike_f);
    sessionStorage.setItem("currentMinF", allWeatherInfo[1].forecast.forecastday[0].day.mintemp_f);
    sessionStorage.setItem("currentMaxF", allWeatherInfo[1].forecast.forecastday[0].day.maxtemp_f);


    if (displayTemp.classList.contains("celsius")) {
      temperature.textContent = `${allWeatherInfo[0].current.temp_c}°C`;
      feelsLike.textContent = `${allWeatherInfo[0].current.feelslike_c}°C`;
      minMaxTemp.textContent = ` 
        ${allWeatherInfo[1].forecast.forecastday[0].day.mintemp_c}°C /
        ${allWeatherInfo[1].forecast.forecastday[0].day.maxtemp_c}°C`;
    }
    else {
      temperature.textContent = `${allWeatherInfo[0].current.temp_f}°F`;
      feelsLike.textContent = `${allWeatherInfo[0].current.feelslike_f}°F`;
      minMaxTemp.textContent = ` 
        ${allWeatherInfo[1].forecast.forecastday[0].day.mintemp_f}°F /
        ${allWeatherInfo[1].forecast.forecastday[0].day.maxtemp_f}°F`;
    }

    currentTemperature.appendChild(temperature);
    currentTemperature.appendChild(conditionIcon);
    div.appendChild(currentTemperature);
    div.appendChild(weatherCondtion);
    div.appendChild(feelsLike);
    div.appendChild(labelFeels);
    div.appendChild(minMaxTemp);
    div.appendChild(label);
    weatherWrapper.appendChild(div);
    document.querySelector(".main-content").appendChild(weatherWrapper);
  }
  showCurrentWeather();


  function showPrecipitation() {
    const weatherWrapper = document.querySelector(".current-weather-wrapper");
    const div = document.createElement("div");
    div.classList.add("city-precipitation");

    const precipitation = document.createElement("h2");
    precipitation.classList.add("precipitation");
    precipitation.textContent = 
      `${allWeatherInfo[1].forecast.forecastday[0].day.daily_chance_of_rain}%`;
    const chanceOfRain = document.createElement("h5");
    chanceOfRain.classList.add("chance-of-rain");
    chanceOfRain.textContent = "Chance of Rain";

    const totalPrecipitation = document.createElement("h4");
    totalPrecipitation.classList.add("total-precipitation");
    totalPrecipitation.textContent = 
      `${allWeatherInfo[1].forecast.forecastday[0].day.totalprecip_mm}mm`;
    const milimeters = document.createElement("h5");
    milimeters.classList.add("mm");
    milimeters.textContent = "Total Precipitation";

    const humidity = document.createElement("h4");
    humidity.classList.add("humidity");
    humidity.textContent = 
    `${allWeatherInfo[1].forecast.forecastday[0].day.avghumidity}%`;
    const averageHumidity = document.createElement("h5");
    averageHumidity.classList.add("average-humidity");
    averageHumidity.textContent = "Average Humidity";
    
    div.appendChild(precipitation);
    div.appendChild(chanceOfRain);
    div.appendChild(totalPrecipitation);
    div.appendChild(milimeters);
    div.appendChild(humidity);
    div.appendChild(averageHumidity);
    weatherWrapper.appendChild(div);
  }
  showPrecipitation();

  function showNextForecast() {
    const nextDayWrapper = document.createElement('div');
    nextDayWrapper.classList.add('next-forecast-container');

    for (let i = 1; i < 3; i++) {
      const nextDayForecast = document.createElement("div");
      nextDayForecast.classList.add("next-forecast", `day${i}`);

      const nextDayDate = document.createElement("h4");
      nextDayDate.classList.add("next-date");
      nextDayDate.textContent = allWeatherInfo[1].forecast.forecastday[i].date;

      const nextDayIcon = new Image();
      nextDayIcon.classList.add("next-icon");
      nextDayIcon.src = allWeatherInfo[1].forecast.forecastday[i].day.condition.icon;
      const nextDayText = document.createElement("h4");
      nextDayText.classList.add("next-text")
      nextDayText.textContent = allWeatherInfo[1].forecast.forecastday[i].day.condition.text;

      sessionStorage.setItem(`day${i}MinC`, allWeatherInfo[1].forecast.forecastday[i].day.mintemp_c);
      sessionStorage.setItem(`day${i}MaxC`, allWeatherInfo[1].forecast.forecastday[i].day.maxtemp_c);
      sessionStorage.setItem(`day${i}MinF`, allWeatherInfo[1].forecast.forecastday[i].day.mintemp_f);
      sessionStorage.setItem(`day${i}MaxF`, allWeatherInfo[1].forecast.forecastday[i].day.maxtemp_f)


      const nextDayTemp = document.createElement("h4");
      nextDayTemp.classList.add("next-temp");

      if (displayTemp.classList.contains("celsius")) {
        nextDayTemp.textContent = 
        `${allWeatherInfo[1].forecast.forecastday[i].day.mintemp_c}°C /
         ${allWeatherInfo[1].forecast.forecastday[i].day.maxtemp_c}°C`;  
            
      }
      else {
        nextDayTemp.textContent = 
        `${allWeatherInfo[1].forecast.forecastday[i].day.mintemp_f}°F / 
        ${allWeatherInfo[1].forecast.forecastday[i].day.maxtemp_f}°F`;  
            
      }


      nextDayForecast.appendChild(nextDayDate);
      nextDayForecast.appendChild(nextDayIcon);
      nextDayForecast.appendChild(nextDayText);
      nextDayForecast.appendChild(nextDayTemp);
      nextDayWrapper.appendChild(nextDayForecast);
      document.querySelector(".main-content").appendChild(nextDayWrapper);
    }
  }   
  showNextForecast();


  return console.log(allWeatherInfo);
}
