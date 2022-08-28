import { api } from './api';

export const getCurrentWeatherByName = async q => {
  try {
    const response = await api.get('/weather', {
      params: {
        q,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
