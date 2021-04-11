import React from 'react'
import '../App.css';
import {temperatureConverter} from "../functions/tempratureConverter";
import {pressureConverter} from "../functions/pressureConverter";

const WeatherInfo = (props) => {
    const {city, temp, temp_min, temp_max, pressure, country, humidity, wind, wind_dir, temp_feel} = props.weatherInfo
    return (
        <div className='weatherInfo-wrapper' style={{paddingTop: 15}}>
            <div>
                <div className='city2'>{city}, {country}</div>
                <div className='temperature2'>
                    <span className='temperature_current'>{temperatureConverter(temp)}&deg;</span>
                </div>
                <div className='temperature_container2'>
                    <div>max. {temperatureConverter(temp_min)}&deg;,</div>
                    <div>min. {temperatureConverter(temp_max)}&deg;</div>
                </div>
                <div className='temperature_container'>
                    <div>feel's like {temperatureConverter(temp_feel)}&deg;</div>
                </div>
                <div className='temperature_details'>
                    <div className='pressureHumidity'>
                        <div className='pressure'>Pressure: {pressureConverter(pressure)} mm.rt.st</div>
                        <div>Humidity: {humidity} %</div>
                    </div>
                    <div className='wind'>
                        <div className='wind'>Wind: {wind} m/s</div>
                        <div>Wind direction: {wind_dir}&deg;</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo