import React, { useState , useEffect } from 'react'
import "./style.css"
import WeatherCard from './weatherCard';

const Temp = () => {
  const [searchValue , setSearchValue] = useState("Multan");
  const [tempInfo , setTempInfo] = useState({}); 
  const getWeatherinfo = async () => {
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=30.19838069999999&lon=71.46870280000007&init&appid=30bcd2e1272de839ae6fc2d7f1099169`;
      const  res = await fetch(url);
      const data = await res.json();
      const {temp , humidity ,pressure} = data.main;
      const {main : weathermood} = data.weather[0];
      const {name} = data;
      const {speed} = data.wind;
      const {country , sunset} = data.sys;
      const myNewWeatherinfo = {
        humidity,
        temp,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      setTempInfo(myNewWeatherinfo);
    }
    catch(error){
      console.log(error);
    }
  };

   useEffect(() => {
    getWeatherinfo();
   }, [])
   

  return (
    <>
    <div className='warp'>
      <div className='search'>
        <input 
        type="search" 
        placeholder="search..."
        autoFocus
        id='search' 
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className='searchTerm'
         />
         <button 
         type="button"
          className='searchButton'
          onClick={getWeatherinfo}
          >
          search
          </button>
      </div>
    </div>
   <WeatherCard {...tempInfo }/>
    </>
  )
}

export default Temp