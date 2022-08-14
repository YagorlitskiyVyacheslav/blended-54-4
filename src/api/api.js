import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: 'a34e0daebedc4e667c5896b64f2b27c9',
  },
});
