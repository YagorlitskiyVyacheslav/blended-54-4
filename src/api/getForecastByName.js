import { api } from './api';

export const getForecastByName = async q => {
  try {
    const response = await api.get('/forecast', {
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
