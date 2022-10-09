import React, { useEffect, useState } from 'react';
import "../assets/styles/Home.css";  
import SideNav from './SideNav';
import Navbar from './Navbar';
import CalenderPreview from './CalenderPreview';
import { useDispatch, useSelector } from "react-redux";
import FullCalender from './FullCalender';
import "../assets/styles/Calender.css";


const Home = () =>{
  const modal = useSelector((state) => state.modal.value);
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  
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

    
         {/* Modal calender  */}
          <FullCalender />
    </div>
  )
}

export default Home
