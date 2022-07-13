import React, { useState } from 'react'

const WeatherCard = ({humidity,
  temp,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset,}) => {
  // console.log(weathermood);


  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
     <article className='widget'>
      <div className="weatherIcon">
        <i className={"wi wi-day-sunny"}></i>
      </div>
      <div className='weatherInfo'>
        <div className="temperature">
          <span>{temp}&deg;  </span>
        </div>
        <div className='description'>
          <div className="weatherCondition">sunny</div>
            <div className='place'>
              {name} , {country}
            </div>
          
        </div>
      </div>
      <div className='date'>
        {new Date().toLocaleString()}
      </div>
      <div className='extra-temp'>
        <div className='temp-info-minmax'>
          <div className='two-sided-section'>
            <p>
              <i className={"wi wi-sunset"}></i>
            </p>
            <p className='extra-info-leftside'>
              {timeStr}<br/>
              sunset
            </p>
          </div>
          <div className='two-sided-section'>
            <p>
              <i className={"wi wi-humidity"}></i>
            </p>
            <p className='extra-info-leftside'>
              {humidity}<br/>
              humidity
            </p>
          </div>
          
          
        </div>
        <div className='weather-extra-info'>
        <div className='two-sided-section'>
            <p>
              <i className={"wi wi-rain"}></i>
            </p>
            <p className='extra-info-leftside'>
              {speed}<br/>
              speed
            </p>
          </div> 
          <div className='two-sided-section'>
            <p>
              <i className={"wi wi-strong-wind"}></i>
            </p>
            <p className='extra-info-leftside'>
              {pressure}<br/>
              wind
            </p>
          </div>
          
        </div>
      </div>
    </article></>
  )
}

export default WeatherCard