import { api } from './api';

export const getCurrentWeather = async (lat, lon) => {
  try {
    const response = await api.get('/weather', {
      params: {
        lat,
        lon,
        units : 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
