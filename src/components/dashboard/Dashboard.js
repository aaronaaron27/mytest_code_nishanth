import React, { Component } from "react";
import { Row, Form, FormGroup, FormControl, ControlLabel, Button, HelpBlock } from 'react-bootstrap';
import './dashboard.sass';
import { Table } from 'reactstrap';

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
                    User_ID: 4
                </Row><br /> <br />

                <Row>
                <div>
				<Table>
					<thead>
						<tr>
							<th>#User_ID</th>
                            <th>User_Name</th>
							<th>Product_Title</th>
							<th>Rating</th>
							<th>Actions</th>

						</tr>
					</thead>

					<tbody>
						<tr>
							<td>1</td>
                            <td>nish</td>
							<td>MSOffice</td>
							<td>4.2</td>
							<td></td>
						</tr>
                        <tr>
                            <td>2</td>
                            <td>aaron</td>
                            <td>USB_drive</td>
                            <td>5.0</td>
                            <td>
                            </td>
                        </tr>
					</tbody>

				</Table>

				</div>

                </Row>

                <Row>
                    <p>
                        Search over name-of-product :
                    </p>
                <input type="text" value="wind" onChange={(e) =>this.handleChange(e.target.value)} />

                </Row><br /> <br />

                <Row>
                    <p>
                        Get Products for Username :
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
