import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
  const [weatherData, setWeatherData] = useState([])
  const API_KEY = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital}&units=m`)
      .then(response => {
        setWeatherData(response.data.current)
      })
  }, [API_KEY, capital])

  return (
    <div>
      <h1>Weather in {capital}</h1>
        <b>Temperature</b>: {weatherData.temperature} C<br/>
        <img src={weatherData.weather_icons} alt={weatherData.weather_descriptions} width="100"/><br/>
        <b>Wind</b>: {weatherData.wind_speed} km/h, {weatherData.wind_dir}
    </div>
  )
}

export default Weather