import React from 'react'
import * as axios from 'axios'
import WeatherInfoC from "./WeatherInfoC";
import {Spinner} from "./Spinner";

export class WeatherForm extends React.Component {
    constructor() {
        super();

        this.state = {
            search: '',
            city: null,
            temp: null,
            temp_min: null,
            temp_max: null,
            pressure: null,
            country: null,
            wind: null

        }
    }


    componentDidMount() {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${'Minsk'}&appid=04fbd09dfff38bda103004c4674e1773`)
            .then(res => {
                this.setState({
                    city: 'Minsk',
                    temp: res.data.main.temp,
                    temp_min: res.data.main.temp_min,
                    temp_max: res.data.main.temp_max,
                    temp_feel: res.data.main.feels_like,
                    pressure: res.data.main.pressure,
                    humidity: res.data.main.humidity,
                    country: res.data.sys.country,
                    wind: res.data.wind.speed,
                    wind_dir: res.data.wind.deg
                })
            })
    }

    onChangeHandler = (e) => {
        this.setState({search: e.target.value})
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.search}&appid=04fbd09dfff38bda103004c4674e1773`)
            .then(res => {
                this.setState({
                    city: this.state.search,
                    temp: res.data.main.temp,
                    temp_min: res.data.main.temp_min,
                    temp_max: res.data.main.temp_max,
                    temp_feel: res.data.main.feels_like,
                    pressure: res.data.main.pressure,
                    humidity: res.data.main.humidity,
                    country: res.data.sys.country,
                    wind: res.data.wind.speed,
                    wind_dir: res.data.wind.deg
                })
                this.setState({search: ''})
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="input-group mb-3">
                        <input className="form-control" type="text" value={this.state.search}
                               onChange={this.onChangeHandler} placeholder='Enter the city' autoFocus/>
                        <button className="btn btn-outline-secondary" type='submit'>search</button>
                    </div>
                </form>
                {this.state.temp
                    ?
                    <WeatherInfoC weatherInfo={{...this.state}}/>
                    :
                    <Spinner/>
                }
            </div>
        )
    }
}