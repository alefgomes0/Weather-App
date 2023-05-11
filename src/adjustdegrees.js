export function adjustDegrees() {
  const displayTemp = document.querySelector(".temp-measure");
  const currentTemperature = document.querySelector(".current-temperature > h2");
  const feelsLike = document.querySelector(".feels-like");
  const currentMinMax = document.querySelector(".min-max-temp");
  const nextDayTemp1 = document.querySelector(".day1 > .next-temp");
  const nextDayTemp2 = document.querySelector(".day2 > .next-temp");
 
  if (displayTemp.classList.contains("celsius")) {
    currentTemperature.textContent = `${sessionStorage.getItem("tempF")}°F`;
    feelsLike.textContent = `${sessionStorage.getItem("feelsF")}°F`;
    currentMinMax.textContent = `${sessionStorage.getItem("currentMinF")}°F /
      ${sessionStorage.getItem("currentMaxF")}°F`; 
    nextDayTemp1.textContent = `${sessionStorage.getItem("day1MinF")}°F /
    ${sessionStorage.getItem("day1MaxF")}°F`; 
    nextDayTemp2.textContent = `${sessionStorage.getItem("day2MinF")}°F /
    ${sessionStorage.getItem("day2MaxF")}°F`; 
  }
  else {
    currentTemperature.textContent = `${sessionStorage.getItem("tempC")}°C`;
    feelsLike.textContent = `${sessionStorage.getItem("feelsC")}°C`;
    currentMinMax.textContent = `${sessionStorage.getItem("currentMinC")}°C /
      ${sessionStorage.getItem("currentMaxC")}°C`; 
    nextDayTemp1.textContent = `${sessionStorage.getItem("day1MinC")}°C /
    ${sessionStorage.getItem("day1MaxC")}°C`; 
    nextDayTemp2.textContent = `${sessionStorage.getItem("day2MinC")}°C /
    ${sessionStorage.getItem("day2MaxC")}°C`; 
  }
 }