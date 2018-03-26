import React, {Component} from 'react';
import '../App.css';
import { withRouter } from 'react-router-dom';

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.aboutMe =this.aboutMe.bind(this);
        this.personalProjects = this.personalProjects.bind(this);
    }

    personalProjects() {
        this.props.history.push('/personalProjects');
    }



    render() {
        return(
            <div className="frontPage-buttons">
                <button type ="button">About Me</button>
                <button
                    type="button"
                    onClick = {this.personalProjects}>
                    Personal Projects
                </button>
            </div>
        );
    }
}

export default withRouter(Buttons);