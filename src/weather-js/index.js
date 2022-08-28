import { refs } from './refs';
import createCurrentWeatherMarkup from '../templates/createCurrentWeatherMarkup.hbs';
import { getForecast } from '../api/getForecast';
import { getCurrentWeather } from '../api/getCurrentWeather';
import { onSubmitSearchForm } from './onSubmitSearchForm';

const successGetCurrentPosition = ({ coords:{latitude, longitude}}) => {
  getCurrentWeather(
    latitude,
    longitude
  ).then(data => {
    refs.weatherContainer.innerHTML = createCurrentWeatherMarkup(data);
  });
  getForecast(
    latitude,
    longitude
  ).then(data=>{console.log(data)})
};

navigator.geolocation.getCurrentPosition(successGetCurrentPosition);

refs.searchForm.addEventListener('submit', onSubmitSearchForm);
