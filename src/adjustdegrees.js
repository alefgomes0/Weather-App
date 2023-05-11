export function adjustDegrees() {
 const displayTemp = document.querySelector(".temp-measure");
 const currentTemperature = document.querySelector(".current-temperature > h2");
 const feelsLike = document.querySelector(".feels-like");
 const currentMinMax = document.querySelector(".min-max-temp");
 const currentMin = Number(document.querySelector(".min-max-temp").textContent.trim().slice(0, 4));
 const currentMax = Number(document.querySelector(".min-max-temp").textContent.slice(-6, -2));
 const nextDayTemp1 = document.querySelector(".day1 > .next-temp");
 const day1MinTemp = Number(document.querySelector(".day1 > .next-temp").textContent.trim().slice(0, 4));
 const day1MaxTemp = Number(document.querySelector(".day1 > .next-temp").textContent.slice(-6, -2));
 const nextDayTemp2 = document.querySelector(".day2 > .next-temp");
 const day2MinTemp = Number(document.querySelector(".day2 > .next-temp").textContent.trim().slice(0, 4));
 const day2MaxTemp = Number(document.querySelector(".day2 > .next-temp").textContent.slice(-6, -2));

  if (displayTemp.classList.contains("celsius")) {
    currentTemperature.textContent = `${Math.round((Number(currentTemperature.textContent.slice(0, 2)) * 9/5) + 32).toFixed(0)}°F`;
    feelsLike.textContent = `${Math.round((Number(feelsLike.textContent.slice(0, 2)) * 9/5) + 32).toFixed(0)}°F`;
    currentMinMax.textContent = `${Math.round((currentMin * 9/5) + 32).toFixed(1)}°F / ${Math.round((currentMax * 9/5) + 32).toFixed(1)}°F`;
    nextDayTemp1.textContent = `${Math.round((day1MinTemp * 9/5) + 32).toFixed(1)}°F / ${Math.round((day1MaxTemp * 9/5) + 32).toFixed(1)}°F`;
    nextDayTemp2.textContent = `${Math.round((day2MinTemp * 9/5) + 32).toFixed(1)}°F / ${Math.round((day2MaxTemp * 9/5) + 32).toFixed(1)}°F`;
  }
  else {
    currentTemperature.textContent = `${Math.round((Number(currentTemperature.textContent.slice(0, 2)) - 32) * 5/9).toFixed(0)}°C`;
    feelsLike.textContent = `${Math.round((Number(feelsLike.textContent.slice(0, 2)) - 32) * 5/9).toFixed(0)}°C`;
    currentMinMax.textContent = `${Math.round((currentMin - 32) * 5/9).toFixed(1)}°C / ${Math.round((currentMax - 32) * 5/9).toFixed(1)}°C`;
    nextDayTemp1.textContent = `${Math.round((day1MinTemp - 32) * 5/9).toFixed(1)}°C / ${Math.round((day1MaxTemp - 32) * 5/9).toFixed(1)}°C`;
    nextDayTemp2.textContent = `${Math.round((day2MinTemp - 32) * 5/9).toFixed(1)}°C / ${Math.round((day2MaxTemp - 32) * 5/9).toFixed(1)}°C`;
  }
}