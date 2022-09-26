import React, { useState } from 'react';
import Logo from "../assets/svg/HabitNowLogo.svg";
import HomeLogo from "../assets/svg/home.svg";
import Timer from "../assets/svg/ClockIcon.svg";
import Categories from "../assets/svg/Caregories Icon.svg";
import Theme from "../assets/svg/ToggleOn.svg";
import Settings from "../assets/svg/Settings Icon.svg";
import Mail from "../assets/svg/Mail.svg";
import Star from "../assets/svg/star.svg";

import { useDispatch } from "react-redux";
import { themeState } from "../features/theme";
import { useSelector } from "react-redux";

function SideNav() {

    const theme = useSelector((state) => state.theme.value);
    const toggle = useSelector((state) => state.toggle.value);
 
    const dispatch = useDispatch();
   
    // const [ navActive, setnavActive ] = useState(true);
    // const [ pageTheme, setPageTheme ] = useState(false);
    
    const date = new Date();
    const WeekDays = [ "Sun", "Mon", "Tues", "Wed", "Thur", "Fri","Sat"];
   
    return (
    <div className={toggle ? "sidenav active" : "sidenav"}>
    <div className="sidenavHeader">
      <div className="logoWrap">
        <img src={Logo} alt="logo" />
      </div>
      <h5 className='day'>{WeekDays[date.getDay()]}</h5>
      <p className='fulldate'>{date.toDateString()}</p>
    </div>

    <div className="navigations">
        <a className="navwrap" active>
            <div className="nav__iconwrap">
               <img src={HomeLogo} alt="home logo" />
            </div>
            <h6>Home</h6>
        </a>
        <a className="navwrap">
            <div className="nav__iconwrap">
               <img src={Timer} alt="home logo" />
            </div>
            <h6>Timer</h6>
        </a>
        <a className="navwrap">
            <div className="nav__iconwrap">
               <img src={Categories} alt="home logo" />
            </div>
            <h6>Categories</h6>
        </a>
        <a className="navwrap" onClick={() => dispatch(themeState(!theme))}>
            <div className="nav__iconwrap">
               <img src={Theme} alt="home logo" />
            </div>
            <h6>Theme</h6>
        </a>
        <a className="navwrap">
            <div className="nav__iconwrap">
               <img src={Settings} alt="home logo" />
            </div>
            <h6>Settings</h6>
        </a>

    </div>

    <div className="footernav">
        <div className="navwrap">
            <div className="nav__iconwrap">
               <img src={Mail} alt="home logo" />
            </div>
            <h6>Contact Us</h6>
        </div>
        <div className="navwrap">
            <div className="nav__iconwrap">
               <img src={Star} alt="home logo" />
            </div>
            <h6>Star</h6>
        </div>
   
    </div>
</div>

  )
}

export default SideNav