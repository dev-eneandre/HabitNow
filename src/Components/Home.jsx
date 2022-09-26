import React, { useEffect, useState } from 'react';
import "../assets/styles/Home.css";  
import SideNav from './SideNav';
import Navbar from './Navbar';
import CalenderPreview from './CalenderPreview';
import { useSelector } from "react-redux";

const Home = () =>{
  const theme = useSelector((state) => state.theme.value);
  
  return (
    <div className={theme ? 'home' : 'home dark'}>
        {/* sideNav */}
        <SideNav />


        <div className="mainBody">
            {/* navbar  */}
            <Navbar />
            {/* Calender preview  */}         
            <CalenderPreview />
         </div>
    </div>
  )
}

export default Home
