import { getCurrentWeatherByName } from '../api/getCurrentWeatherByName';
import createCurrentWeatherMarkup from '../templates/createCurrentWeatherMarkup.hbs';
import { getForecastByName } from '../api/getForecastByName';
import fiveDaysMarkup from '../templates/fiveDaysWeather.hbs';
import { refs } from './refs';
export const onSubmitSearchForm = event => {
  event.preventDefault();

  const cityName = event.currentTarget.elements.city_name.value;
  if (!cityName) {
    alert('Please, enter name of city.');
    return;
  }

  getCurrentWeatherByName(cityName).then(data => {
    refs.weatherContainer.innerHTML = createCurrentWeatherMarkup(data);
  });

  getForecastByName(cityName).then(data => {console.log(data);
    refs.fiveDaysContainer.innerHTML = fiveDaysMarkup(data);
  })
};
