import { faGlobe, faMapMarkerAlt, faTint, faWind } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import sunRain from '../images/sunRain.png';
import profilePic from "../images/profilePic.jpg"
import '../Sass/Layout/__RightContent.scss'
import React from 'react'

function RightContent() {
    const date = new Date()
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var dayOfWeek = date.getDay();
    var dayName = days[dayOfWeek];

    return (
        <div className="rightContent">
            <div className="rightContent__top">
                <input
                type="search"
                placeholder={
                    "Search..."
                }
                />
                <img src={profilePic} />
            </div>
            <div className="rightContent__middle">
                <div className="rightContent__middle-firstCard">
                    <div className="rightContent__middle-loc">
                        <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="locaitonIcon"
                        />
                        <h3>Sivas</h3>
                    </div>
                    <div className="rightContent__middle-today">
                        <img src={sunRain} 
                            style={{width:"120px", height:"120px"}}
                        />
                        <h3>Today, {dayName} 2021-11-20</h3>
                        <h1>5.8°</h1>
                        <h4>Patchy rain possible</h4>
                        <div className="rightContent__middle-today-features">
                            <div className="rightContent__middle-today-features-wind">
                                <FontAwesomeIcon
                                style={{marginRight:"10px", color:"white"}} 
                                icon={faWind}
                                />
                                Wind | 7.2 km/h
                            </div>
                            <div className="rightContent__middle-today-features-humidity">
                                <FontAwesomeIcon 
                                style={{marginRight:"10px", color:"white"}} 
                                icon={faTint}
                                />
                                Hum | 22 %
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightContent__bottom">
                <div className="rightContent__bottom-content">
                    <div className="rightContent__bottom-content-features">
                        <div className="rightContent__bottom-content-features-wind">
                            <FontAwesomeIcon
                            style={{marginRight:"10px", color:"white"}} 
                            icon={faWind}
                            />
                            Wind | 15 km/h
                        </div>
                        <div className="rightContent__bottom-content-features-humidity">
                            <FontAwesomeIcon 
                            style={{marginRight:"10px", color:"white"}} 
                            icon={faTint}
                            />
                            Hum | 22 %
                        </div>
                    </div>
                   <div className="rightContent__bottom-content-cloumn">
                        <div className="rightContent__bottom-content-column-loc">
                            <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            className="locaitonIcon"
                            />
                            <h3>Istanbul</h3>
                        </div>
                        <div className="rightContent__bottom-content-column-temp">
                            <h1>14°</h1>
                        </div>
                   </div>
                    
                </div>
            </div>

        </div>
    )
}

export default RightContent
