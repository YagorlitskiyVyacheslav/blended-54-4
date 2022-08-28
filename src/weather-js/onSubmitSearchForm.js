import { getCurrentWeatherByName } from '../api/getCurrentWeatherByName';
import createCurrentWeatherMarkup from '../templates/createCurrentWeatherMarkup.hbs';
import { getForecastByName } from '../api/getForecastByName';
import fiveDaysMarkup from '../templates/fiveDaysWeather.hbs';
import { refs } from './refs';

export let cityName = null
export const onSubmitSearchForm = event => {
  event.preventDefault();

   cityName = event.currentTarget.elements.city_name.value;
  if (!cityName) {
    alert('Please, enter name of city.');
    return;
  }

  getCurrentWeatherByName(cityName).then(data => {
    refs.weatherContainer.innerHTML = createCurrentWeatherMarkup(data);
  });

  refs.fiveDaysContainer.innerHTML="";
};
