import React, { useState } from 'react';
import SearchIcon from "../assets/svg/search.svg";
import CalenderIcon from "../assets/svg/Calender.svg";
import { useDispatch } from "react-redux";
import { toggleState } from '../features/toggle';
import { useSelector } from "react-redux";


function Navbar() {
    const toggle = useSelector((state) => state.toggle.value);
 
    const dispatch = useDispatch()
    const [ navActive, setnavActive ] = useState(true);
    const [ searchToggle, setSearchToggle ] = useState(false);


  return (
    <div className="navbar">
        <div className="navbar__left">
        <div className={toggle ? "toggler activeToggle" : "toggler"} onClick={() => dispatch(toggleState(!toggle)) }></div>
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
  )
}

export default Navbar