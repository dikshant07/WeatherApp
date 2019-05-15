import React from 'react';
import './displaydata.css';
const Displaydata = (props) => {
  return(
    <div className="body-container4">
      <div className="header">
        {props.cityinfo},{props.country},{props.date}
      </div>
      <div className="bdy-container">
      <div className="bdy-container1">
        {props.tmpmx}<sup>.</sup>C
        <img src={props.icon}/>
      </div>
      <div className="bdy-container2">
        <div className="desc">
        Weather: {props.description}<br/>
        Wind: {props.wind}
      </div>
      <div className="desc">
        Humidity: {props.humidity}<br/>
        Pressure: {props.pressure}
      </div>
      <div className="desc">
        Max Temp: {props.tmpmx}<br/>
        Min Temp: {props.tmpmn}
      </div>
      <div className="desc">
        Sunrise: {props.sunrise}<br/>
      Sunset: {props.sunset}
      </div>
      </div>
    </div>
  </div>
  )
}
export default Displaydata;
