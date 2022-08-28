import { getCurrentWeatherByName } from '../api/getCurrentWeatherByName';

export const onSubmitSearchForm = event => {
  event.preventDefault();

  const cityName = event.currentTarget.elements.city_name.value;
  if (!cityName) {
    alert('Please, enter name of city.');
    return;
  }

  getCurrentWeatherByName(cityName).then(data => console.log(data));
};
