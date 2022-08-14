
export const createCurrentWeatherMarkup = (data) => {
return `<div> <h2> City: ${data.name}</h2> <p> Temp: ${data.main.temp} °C.
</p> </div>`
}