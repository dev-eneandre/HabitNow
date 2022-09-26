import React from 'react'

function CalenderPreview() {

    const date = new Date();

    const WeekDays = [ "Sun", "Mon", "Tues", "Wed", "Thur", "Fri","Sat"];
    let TodaysDate = new Date().getDate();
    let weekDayDateCount = -1;
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const getTheDay = new Date().getDay();
       

  return (
    <div className="datePreview">
    {/* calender or whatever */}
    {
        (() => {
            let days = [];

            for(let x = (TodaysDate-getTheDay); x <= lastDay; x++){
                if (x === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                    days.push(
                    <div className="days currentDay">
                        <div className="Weekdays">
                            {weekDayDateCount >= 6 ? WeekDays[weekDayDateCount = 0 ]: WeekDays[weekDayDateCount +=1 ]}
                            </div>
                            <div className="dayNumbers">
                                {x}
                                </div>
                                </div>)
                            }else{
                                days.push(
                                <div className="days ">
                                    <div className="Weekdays">
                                        {weekDayDateCount >= 6 ? WeekDays[weekDayDateCount = 0 ]: WeekDays[weekDayDateCount +=1 ]}
                                    </div>
                                <div className="dayNumbers">
                                        {x}
                                    </div>
                            </div>)
                }
            }
            
            return days;
        })()
    }
</div>
  )
}

export default CalenderPreview