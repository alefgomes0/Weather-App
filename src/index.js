import './styles.css';
import addCloud from './header.js';
import {displayWeatherData} from './displayweather.js';
import {adjustDegrees} from './adjustdegrees.js';


addCloud();
displayWeatherData();

document.querySelector(".temp-measure").addEventListener("click", (e) => {
  if(e.target.classList.contains("celsius")) {
    adjustDegrees();
    document.querySelector(".temperature-c").classList.remove("temp-style-display");
    document.querySelector(".temperature-f").classList.add("temp-style-display");
    e.target.classList.remove("celsius");
  }
  else {
    adjustDegrees();
    document.querySelector(".temperature-f").classList.remove("temp-style-display");
    document.querySelector(".temperature-c").classList.add("temp-style-display");
    e.target.classList.add("celsius");
  }
})


document.querySelector(".search-icon").addEventListener("click", () => {
  const query = document.querySelector("input").value;
  const mainContent =  document.querySelectorAll(".main-content > *");
  if (mainContent.length > 0) {
    mainContent.forEach(element => element.remove());
  }
  displayWeatherData(query);
});
