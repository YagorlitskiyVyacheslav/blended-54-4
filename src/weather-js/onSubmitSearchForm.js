import { getCurrentWeatherByName } from '../api/getCurrentWeatherByName';
import createCurrentWeatherMarkup from '../templates/createCurrentWeatherMarkup.hbs';

export const onSubmitSearchForm = event => {
  event.preventDefault();

  const cityName = event.currentTarget.elements.city_name.value;
  if (!cityName) {
    alert('Please, enter name of city.');
    return;
  }

  getCurrentWeatherByName(cityName).then(createCurrentWeatherMarkup);
};
