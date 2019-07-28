import React, { Component } from "react";
import { Row, Form, FormGroup, FormControl, ControlLabel, Button, HelpBlock } from 'react-bootstrap';
import './dashboard.sass';

class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
           loggedIn: true
        }
    }


    render() {

        //const { errors, formSubmitted } = this.state;

        return (
            <div className="Dashboard">
                <Row>
                    
                            <ControlLabel>Welcome</ControlLabel>
                    
                </Row>
                <Row>
                    User
                </Row><br /> <br />
                <Row>
                    <p>
                        Search over name-of-product :
                    </p>
                <input type="text" value="wind" onChange={(e) =>this.handleChange(e.target.value)} />

                </Row><br /> <br />
                <ul>
                    <li>
                        VS-Studio-Pro
                    </li>
                    <li>
                    Windows XP
                    </li>
                    <li>
                    Windows 10
                    </li>
                    <li>
                    Norton Antivirus
                    </li>
                    <li>
                    AWS Account
                    </li>

                </ul>
                <br /> <br /> <br />
                <Row>
                    <p>
                        Get Products for name :
                    </p>
                <input type="text" value="nishanth" onChange={(e) =>this.handleChange(e.target.value)} />

                <ul>
                    <li>
                        VS-Studio-Pro
                    </li>
                    <li>
                    Ubuntu OS
                    </li>
                    <li>
                    SanDisk Pendrive
                    </li>
                    <li>
                    DevExpress tools
                    </li>
                    

                </ul>
                <br /> <br /> <br />

                </Row><br /> <br />

            </div>
        )
    }
}

export default Dashboard;
