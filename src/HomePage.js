import React , {Component} from 'react';
import './App.css';
import Buttons from './FrontPage/Buttons.js';
import Header from './FrontPage/Header.js';

class HomePage extends Component {
    render() {
        return(
            <div>
                <Header />
                <Buttons />
            </div>
        );
    }
}

export default HomePage;