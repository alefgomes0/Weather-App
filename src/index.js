import './styles.css';
import addCloud from './header.js';
import {displayWeatherData} from './displayweather.js';
import {adjustDegrees} from './adjustdegrees.js';


addCloud();
displayWeatherData();
const changeScale = document.querySelector(".temp-measure");

changeScale.addEventListener("click", () => {
  if(changeScale.classList.contains("celsius")) {
    adjustDegrees();
    changeScale.classList.remove("celsius");
    document.querySelector(".temperature-c").classList.remove("temp-style-display");
    document.querySelector(".temperature-f").classList.add("temp-style-display");
  }
  else {
    adjustDegrees();
    changeScale.classList.add("celsius");
    document.querySelector(".temperature-f").classList.remove("temp-style-display");
    document.querySelector(".temperature-c").classList.add("temp-style-display");
  }
});


document.querySelector(".search-icon").addEventListener("click", () => {
  const query = document.querySelector("input").value;
  const mainContent =  document.querySelectorAll(".main-content > *");
  if (mainContent.length > 0) {
    mainContent.forEach(element => element.remove());
  }
  displayWeatherData(query);
});
