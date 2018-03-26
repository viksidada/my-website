import React, { Component } from 'react';
import HomePage from './HomePage.js';
import {BrowserRouter, Route} from 'react-router-dom';
import Test from './FrontPage/Test.js';
import WeatherHome from './WeatherApp/WeatherHome.js';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route path="/" exact strict component ={HomePage} />
                <Route path="/test" exact strict component ={Test} />
                <Route path="/personalProjects" exact strict component ={WeatherHome} />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
