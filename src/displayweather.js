import {fetchWeatherData} from './fetchweather.js';


export async function displayWeatherData() {
  // const city = document.querySelector('input').value;
  let cityInfo = await fetchWeatherData();

  function showCityName() {
    const div = document.createElement('div');
    div.classList.add('city-name')

    const h2 = document.createElement('h2');
    h2.textContent = `${cityInfo.location.name}`
    const h5 = document.createElement('h5');
    h5.textContent = `${cityInfo.location.region}, ${cityInfo.location.country}`;

    div.appendChild(h2);
    div.appendChild(h5);
    document.querySelector('.main-content').appendChild(div);
  }
  showCityName();

  return console.log(cityInfo);
}