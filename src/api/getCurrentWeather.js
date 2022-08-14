import { api } from './api';

export const getCurrentWeater = async () => {
  try {
    const response = await api.get('/weather', {
      params: {
        lat: 49.2349416,
        lon: 28.4929586,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
