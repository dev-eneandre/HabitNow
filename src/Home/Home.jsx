import React, { useEffect, useState } from 'react';
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

    const date = new Date();

    const WeekDays = [ "Sun", "Mon", "Tues", "Wed", "Thur", "Fri","Sat"];
    let TodaysDate = new Date().getDate();
    let weekDayDateCount = -1;
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const getTheDay = new Date().getDay();
          
    const day = "friday";
    const fulldate = "September 9, 2022";


  return (
    <div className={pageTheme ? 'home' : 'home dark'}>
        <div className={navActive ? "sidenav active" : "sidenav"}>
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
                <a className="navwrap" onClick={() => setPageTheme(!pageTheme)}>
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
        <div className="mainBody">
            <div className="navbar">
                  <div className="navbar__left">
                    <div className={navActive ? "toggler activeToggle" : "toggler"} onClick={() => setnavActive(!navActive)}></div>
                    <h3>Today</h3>
                  </div>

                  <div className="navbar__right">
                      <div className="search">
                          
                          <div className="searchBar">
                            <input type="text" placeholder='find your notes' />
                          </div>

                          <div className="searchBtnWrap" onClick={() => setSearchToggle(!searchToggle)}>
                              <img src={SearchIcon} alt='icon' />
                          </div>

                          <div className="searchBtnWrap">
                              <img src={CalenderIcon} alt='icon' />
                          </div>
                      </div>
                  </div>
            </div>

              {/* Calender preview  */}
            <div className="datePreview">
                    {/* calender or whatever */}
                    {
                        (() => {
                            let days = [];

                            for(let x = (TodaysDate-getTheDay); x <= lastDay; x++){
                                if (x === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                                    days.push(
                                    <div class="days currentDay">
                                        <div class="Weekdays">
                                            {weekDayDateCount >= 6 ? WeekDays[weekDayDateCount = 0 ]: WeekDays[weekDayDateCount +=1 ]}
                                            </div>
                                            <div class="dayNumbers">
                                                {x}
                                                </div>
                                                </div>)
                                            }else{
                                                days.push(
                                                <div class="days ">
                                                    <div class="Weekdays">
                                                        {weekDayDateCount >= 6 ? WeekDays[weekDayDateCount = 0 ]: WeekDays[weekDayDateCount +=1 ]}
                                                    </div>
                                                <div class="dayNumbers">
                                                        {x}
                                                    </div>
                                            </div>)
                                }
                            }
                            
                            return days;
                        })()

                        
                    }
            </div>
         </div>
    </div>
  )
}

export default Home