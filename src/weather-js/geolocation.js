export let lat = null;
export let lon = null;

export const successGetCurrentPosition = ({
  coords: { latitude, longitude },
}) => {
  lat = latitude;
  lon = longitude;
  getCurrentWeather(latitude, longitude).then(data => {
    refs.weatherContainer.innerHTML = createCurrentWeatherMarkup(data);
  });
};
