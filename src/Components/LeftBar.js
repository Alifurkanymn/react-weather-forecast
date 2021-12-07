import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faCalendar, faChartBar,faAngleDoubleRight, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import '../Sass/Layout/__LeftBar.scss'

function LeftBar() {
    const[isVisibleMenu, setIsVisibleMenu]=useState(false)


    const openMenu = () =>{
        setIsVisibleMenu(true)
    }
    const closeMenu = () =>{
        setIsVisibleMenu(false)
    }
    return (
        <div className="menu">
            <div className={isVisibleMenu ? "menu__style" : "menu__styleFalse"}>
            <ul>
                <li
                    style={{marginTop:"0px"}}
                    >
                    {
                        isVisibleMenu ? <FontAwesomeIcon
                        icon={faAngleDoubleLeft}
                        onClick={closeMenu}
                        className={isVisibleMenu ? "menuIcon" : "menuIconOpenFalse"}
                        /> :
                        <FontAwesomeIcon
                        icon={faAngleDoubleRight}
                        onClick={openMenu}
                        className={isVisibleMenu ? "menuIcon" : "menuIconOpenFalse"}
                        />
                    }
                   
                </li>
                <li>
                    <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className={isVisibleMenu ? "menuIcon" : "menuIconFalse"}
                    />
                </li>
                <li>
                    <FontAwesomeIcon
                    icon={faChartBar}
                    className={isVisibleMenu ? "menuIcon" : "menuIconFalse"}
                    />
                </li>
                <li>
                    <FontAwesomeIcon
                    icon={faCalendar}
                    className={isVisibleMenu ? "menuIcon" : "menuIconFalse"}
                    />
                </li>
            </ul>
            </div>
        </div>
    )
}

export default LeftBar
