import { refs } from './refs';
import createCurrentWeatherMarkup from '../templates/createCurrentWeatherMarkup.hbs';
import { getForecast } from '../api/getForecast';
import { getCurrentWeather } from '../api/getCurrentWeather';
import { onSubmitSearchForm } from './onSubmitSearchForm';
import fiveDaysWeather from '../templates/fiveDaysWeather.hbs'
let lat = null;
let lon = null;

const successGetCurrentPosition = ({ coords: { latitude, longitude } }) => {
  lat = latitude;
  lon = longitude;
  getCurrentWeather(
    latitude,
    longitude
  ).then(data => {
    refs.weatherContainer.innerHTML = createCurrentWeatherMarkup(data);
  });
};

refs.fiveDaysBtn.addEventListener('click', onClickFiveDays);
refs.todayBtn.addEventListener('click', onClickToday);

navigator.geolocation.getCurrentPosition(successGetCurrentPosition);

refs.searchForm.addEventListener('submit', onSubmitSearchForm);

function onClickFiveDays() {
  refs.weatherContainer.innerHTML = '';
  getForecast(
    lat,
    lon
  ).then(data => { refs.fiveDaysContainer.innerHTML = fiveDaysWeather(data) })
}
function onClickToday() {
  refs.fiveDaysContainer.innerHTML = '';
  getCurrentWeather(
    lat,
    lon
  ).then(data => {
    refs.weatherContainer.innerHTML = createCurrentWeatherMarkup(data);
  });
}