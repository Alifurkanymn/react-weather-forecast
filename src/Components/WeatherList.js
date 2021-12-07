import React from 'react'
import '../Sass/Layout/__WeatherList.scss'
import sunRain from '../images/sunRain.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMoon, faSun, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import {Line} from 'react-chartjs-2';

function WeatherList(props) {
    const {weather} = props
    const date = new Date()
    const state = {
        labels: ['Today', 'Next Day', '2021-11-22'],
        datasets: [
          {
            label: 'Temperature',
            fill:false,
            backgroundColor: 'rgb(121, 132, 250)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: [5.8, 9.8, 12.2]
          }
        ]
      }
    
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var dayOfWeek = date.getDay();
    var dayName = days[dayOfWeek];

      console.log(weather);

    return (
        <div className="weatherList"> 
            <div className="weatherList__content">
                <div className="weatherList__content-date"><h1>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</h1></div>
                <div className="weatherList__content-day"><h4>{dayName} {weather.forecast.forecastday[0].date}</h4></div>
                <div className="weatherList__content-7Days">
                    {
                    weather.forecast.forecastday.map((filter,index) => (
                        <div className="weatherList__content-7Days-flex">
                            <div className="weatherList__content-7Days-flex-content">
                                <img src={sunRain} 
                                style={{width:"70px", height:"70px"}}
                                />
                                <h3  style={{fontWeight:"700", fontSize:"16px"}}>{filter.day.condition.text}</h3>
                                <h3 style={{fontWeight:"400", fontSize:"15px"}}>{filter.date}</h3>
                            </div>
                            <div className="weatherList__content-7Days-flex-subContent">
                            <div className="weatherList__content-7Days-flex-subContent-minTemp">
                                    <FontAwesomeIcon
                                    style={{marginRight:"10px"}} 
                                    icon={faTemperatureHigh}
                                    className="weatherList__content-7Days-flex-subContent-minTemp-icon"
                                    />
                                    <h3>Max | {filter.day.maxtemp_c}°</h3>
                                </div>
                                <div className="weatherList__content-7Days-flex-subContent-minTemp">
                                    <FontAwesomeIcon
                                    style={{marginRight:"10px"}} 
                                    icon={faTemperatureLow}
                                    className="weatherList__content-7Days-flex-subContent-minTemp-icon"
                                    />
                                    <h3>Min | {filter.day.mintemp_c}°</h3>
                                </div>
                                <div className="weatherList__content-7Days-flex-subContent-wind">
                                    <FontAwesomeIcon
                                    style={{marginRight:"10px"}} 
                                    icon={faWind}
                                    className="weatherList__content-7Days-flex-subContent-minTemp-icon"
                                    />
                                    <h3>Wind | {filter.day.maxwind_kph}</h3>
                                </div>
                            </div>
                        </div>
                    ))
                }

                                       
                    
                </div>
                <div className="weatherList__content-bottom">
                    <div className="weatherList__content-bottom-graphic"> 
                    <Line
                        data={state}
                        className="graphic"
                        options={{
                        title:{
                            display:true,
                            fontSize:20
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                        }}
                    />
                    </div>
                    <div className="weatherList__content-bottom-sun">
                        <div className="weatherList__content-bottom-sun-text">
                            <h3>Sunrise & Sunset</h3>
                        </div>

                        {
                    weather.forecast.forecastday.map((filter,index) => (
                        <div className="weatherList__content-bottom-sun-city">
                            <div className="weatherList__content-bottom-sun-city-loc">
                                <FontAwesomeIcon
                                icon={faClock}
                                className="sunriseIcon"
                                />
                                <h3 style={{fontSize:"14px", fontWeight:"700"}}>{filter.date}</h3>
                            </div>
                            <div className="weatherList__content-bottom-sun-city-content">
                                
                                <div className="weatherList__content-bottom-sun-city-content-flex">
                                    <div className="weatherList__content-bottom-sun-city-content-flex-icon">
                                        <FontAwesomeIcon 
                                        icon={faSun}
                                        className="SunIcon"
                                        />
                                    </div>
                                    <div className="weatherList__content-bottom-sun-city-content-flex-text">
                                        <h4>Sunrise</h4>
                                        <h3>{filter.astro.sunrise}</h3>
                                    </div>
                                </div>
                                <div className="weatherList__content-bottom-sun-city-content-flex">
                                    <div className="weatherList__content-bottom-sun-city-content-flex-icon">
                                        <FontAwesomeIcon 
                                        icon={faMoon}
                                        className="SunIcon"
                                        />
                                    </div>
                                    <div className="weatherList__content-bottom-sun-city-content-flex-text">
                                        <h4>Sunset</h4>
                                        <h3>{filter.astro.sunset}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                    </div>
                </div>
                {/* Hava Durumu
                <p>Şehir: {weather.name}</p>
                <p>{weather.weather.map(e=>e.description).join(", ")}</p>
                <p>Rüzgar Hızı: {weather.wind.speed}</p>
                <p>{weather.main.temp}°C</p> */}
                
            </div>
        </div>
    )
}

export default WeatherList
