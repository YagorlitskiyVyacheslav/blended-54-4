import { refs } from './refs';
import createCurrentWeatherMarkup from '../templates/createCurrentWeatherMarkup.hbs';

import { getCurrentWeather } from '../api/getCurrentWeather';
import { onSubmitSearchForm } from './onSubmitSearchForm';

const successGetCurrentPosition = geolocation => {
  getCurrentWeather(
    geolocation.coords.latitude,
    geolocation.coords.longitude
  ).then(data => {
    refs.weatherContainer.innerHTML = createCurrentWeatherMarkup(data);
  });
};

navigator.geolocation.getCurrentPosition(successGetCurrentPosition);

refs.searchForm.addEventListener('submit', onSubmitSearchForm);
