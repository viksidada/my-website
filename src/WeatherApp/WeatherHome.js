import React, {Component} from 'react';
import '../App.css';

class WeatherHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            country: ''
        };

    }

    // componentDidMount() {
    //     const BASE_URL = "api.openweathermap.org/data/2.5/weather?q=";
    //     const FETCH_URL = `${BASR_URL}${this.state.city},${this.state.country}&APPID=5b91d994eb5e280129b5d5d35ef649eb`;
    //
    //
    // }

    render() {
        return(
            <div className = "weather-home">
                <h1>Welcome to Weather App</h1>
                <div className= "weather-buttons">
                    City: <input type="text" name = "city" />
                    Country: <input type="text" name = "country" />
                    <button type= "button">Submit</button>
                </div>
            </div>
        );
    }
}

export default WeatherHome;