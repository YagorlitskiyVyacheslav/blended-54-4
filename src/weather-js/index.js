import { refs } from "./refs";
import { createCurrentWeatherMarkup } from './createCurrentWeatherMarkup'

import {getCurrentWeather} from "../api/getCurrentWeather"

const successGetCurrentPosition = (geolocation) => {
    getCurrentWeather(geolocation.coords.latitude, geolocation.coords.longitude).then(data => {
     refs.weatherApp.insertAdjacentHTML('beforeend', createCurrentWeatherMarkup(data))
 })
}

console.log(navigator.geolocation.getCurrentPosition(successGetCurrentPosition))
