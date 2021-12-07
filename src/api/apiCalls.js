import axios from 'axios';

export const getWeatherForecast = (lat,lon,key) => {
    return axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`,{
    });
}