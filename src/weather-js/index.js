import { refs } from './refs';
import { createCurrentWeatherMarkup } from './createCurrentWeatherMarkup';

import { getCurrentWeather } from '../api/getCurrentWeather';
import { onSubmitSearchForm } from './onSubmitSearchForm';

const successGetCurrentPosition = geolocation => {
  getCurrentWeather(
    geolocation.coords.latitude,
    geolocation.coords.longitude
  ).then(data => {
    refs.weatherApp.insertAdjacentHTML(
      'beforeend',
      createCurrentWeatherMarkup(data)
    );
  });
};

navigator.geolocation.getCurrentPosition(successGetCurrentPosition);

refs.searchForm.addEventListener('submit', onSubmitSearchForm);
