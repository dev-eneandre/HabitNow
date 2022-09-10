import React, { useState } from 'react';
import "./Home.css";
import Logo from "../assets/svg/HabitNowLogo.svg";
import HomeLogo from "../assets/svg/home.svg";
import Timer from "../assets/svg/ClockIcon.svg";
import Categories from "../assets/svg/Caregories Icon.svg";
import Theme from "../assets/svg/ToggleOn.svg";
import Settings from "../assets/svg/Settings Icon.svg";
import Mail from "../assets/svg/Mail.svg";
import Star from "../assets/svg/star.svg";
import SearchIcon from "../assets/svg/search.svg";
import CalenderIcon from "../assets/svg/Calender.svg";

const Home = () =>{
    const [ navActive, setnavActive ] = useState(true);
    const [ pageTheme, setPageTheme ] = useState(false);
    const [ searchToggle, setSearchToggle ] = useState(false);

    const day = "friday";
    const fulldate = "September 9, 2022";

    
  return (
    <div className='home'>
        <div className={navActive ? "sidenav active" : "sidenav"}>
            <div className="sidenavHeader">
              <div className="logoWrap">
                <img src={Logo} alt="logo" />
              </div>
              <h5 className='day'>{day}</h5>
              <p className='fulldate'>{fulldate}</p>
            </div>

            <div className="navigations">

                <div className="navwrap">
                    <div className="nav__iconwrap">
                       <img src={HomeLogo} alt="home logo" />
                    </div>
                    <h6>Home</h6>
                </div>
                <div className="navwrap">
                    <div className="nav__iconwrap">
                       <img src={Timer} alt="home logo" />
                    </div>
                    <h6>Timer</h6>
                </div>
                <div className="navwrap">
                    <div className="nav__iconwrap">
                       <img src={Categories} alt="home logo" />
                    </div>
                    <h6>Categories</h6>
                </div>
                <div className="navwrap">
                    <div className="nav__iconwrap">
                       <img src={Theme} alt="home logo" />
                    </div>
                    <h6>Theme</h6>
                </div>
                <div className="navwrap">
                    <div className="nav__iconwrap">
                       <img src={Settings} alt="home logo" />
                    </div>
                    <h6>Settings</h6>
                </div>

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
        <div className="mainBody">
              <div className="navbar">
                  <div className="navbar__left">
                    <div className={navActive ? "toggler activeToggle" : "toggler"} onClick={() => setnavActive(!navActive)}></div>
                    <h3>Today</h3>
                  </div>

                  <div className="navbar__right">
                      <div className="search">
                         
                          <div className="searchBtnWrap" onClick={() => setSearchToggle(!searchToggle)}>
                              <img src={SearchIcon} alt='icon' />
                          </div>
                          <div className="searchBtnWrap" onClick={() => setSearchToggle(!searchToggle)}>
                              <img src={CalenderIcon} alt='icon' />
                          </div>
                      </div>
                  </div>
              </div>


        </div>
    </div>
  )
}

export default Home