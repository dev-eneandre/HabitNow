import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { modalState } from '../features/modal';
import "../assets/styles/Calender.css";

function FullCalender() {
  
  const modal = useSelector((state) => state.modal.value);
  const dispatch = useDispatch();

  const date = new Date();

  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  // console.log(prevLastDay);

  // gets the index of the first day of the previous month 
  const FirstDay = new Date(date.getFullYear(),date.getMonth()).getDay();

  const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
      ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
  ];

  
  return (
    <div className={modal ? "bg-modal active-modal" : "bg-modal"}>
          <div class="containerr">
            <div class="calendarr"> 
                <div class="monthh">
                    <i class="fas fa-angle-left prev"></i>
                    <div class="datee">
                        <h1>{months[date.getMonth()]}</h1>
                        <p>{new Date().toDateString()}</p>
                    </div>
                    <i class="fas fa-angle-right next"></i>
                    
                    <button className="closebtn" onClick={() => dispatch(modalState(false))}>close</button> 
                </div>
                <div class="weekdayss">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tues</div>
                    <div>Wed</div>
                    <div>Thur</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
                  <div class="dayss">{
                    (() => {
                        let days  = [];

                        for(let x = FirstDay; x > 0; x--){
                          days.push(<div class="prev-date">{prevLastDay - x + 1}</div>)
                      }
                  
                      for (let i = 1; i <= lastDay; i++) {
                          if (i === new Date().getDate() &&
                            date.getMonth() === new Date().getMonth()
                          ) {
                            days.push(<div class="todayy">{i}</div>);
                          } else {
                            days.push(<div>{i}</div>);
                          }
                        } 
                  
                  
                      for(let z = 1; z <= nextDays; z++ ){
                          days.push(<div class="next-date">{z}</div>);
                      }
                        return days;
                  })()
                }</div>
            </div>
        </div>

      </div>
  )
}

export default FullCalender