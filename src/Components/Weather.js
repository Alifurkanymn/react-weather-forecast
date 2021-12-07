import React from 'react'
import axios from 'axios';
import {useEffect, useState} from 'react'
import WeatherList from './WeatherList';


function Weather() {
const[weather,setWeather]=useState()

useEffect(async ()=>{
    const data = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=33c2e90cbb17411ab61201901211711&q=Sivas&days=7&aqi=yes&alerts=yes`
    );
    setWeather(data.data);
  
},[])

if(!weather){
  return <p>Yükleniyor..</p>
} 
console.log(weather)
    return (
        <div>
            <WeatherList weather={weather}/>
        </div>
    )
}

export default Weather
