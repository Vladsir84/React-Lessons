import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './clock.scss';


const Clock = ({ location, offset }) => {
  const [clock, setClock] = useState(null);
  
  
  const getTimeWidthOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return moment(currentTime.setHours(currentTime.getHours() + offset + utcOffset)).format('LTS');
  }
  
  
  useEffect(() => {

  const setTime = setInterval(() => {
      setClock(getTimeWidthOffset(offset));
    }, 1000);
     
  return () => clearInterval(setTime);
  
  })

  return (
    <div className="clock" >
      <div className="clock__location">{location}</div>
      <div className="clock__time">{clock}</div>
    </div>

  );
}


export default Clock;