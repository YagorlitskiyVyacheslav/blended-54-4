import { api } from './api';

export const getForecast = async (lat, lon) => {
  try {
    const response = await api.get('/forecast', {
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