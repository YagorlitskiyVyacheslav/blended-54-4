import { getCurrentWeather } from '../api/getCurrentWeather';
import { getCurrentWeatherByName } from '../api/getCurrentWeatherByName';
import { getForecast } from '../api/getForecast';
import { getForecastByName } from '../api/getForecastByName';
import { refs } from '../js/refs';
import { lat, lon } from './geolocation';
import createCurrentWeatherMarkup from '../templates/createCurrentWeatherMarkup.hbs';
import fiveDaysWeather from '../templates/fiveDaysWeather.hbs';

export function onClickFiveDays() {
  refs.weatherContainer.innerHTML = '';
  if (cityName) {
    getForecastByName(cityName).then(data => {
      refs.fiveDaysContainer.innerHTML = fiveDaysWeather(data);
    });
    return;
  }
  getForecast(lat, lon).then(data => {
    refs.fiveDaysContainer.innerHTML = fiveDaysWeather(data);
  });
}
export function onClickToday() {
  refs.fiveDaysContainer.innerHTML = '';
  if (cityName) {
    getCurrentWeatherByName(cityName).then(data => {
      refs.fiveDaysContainer.innerHTML = fiveDaysWeather(data);
    });
    return;
  }
  getCurrentWeather(lat, lon).then(data => {
    refs.weatherContainer.innerHTML = createCurrentWeatherMarkup(data);
  });
}
