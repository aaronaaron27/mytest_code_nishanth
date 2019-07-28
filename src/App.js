import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';

class App extends Component {
	
	state = {
		loggedIn: false // user is not logged in
	  };

	render() {
		return (
			<Router>

			
			<div className="App">
			<div className="SiteHeader">
			<h2>
				CodeByt 	
			</h2>	
			</div>
				<Switch>
   		           <Route exact path='/' component={Login} />
   		           <Route path='/login/Login' component={Login} />
   		           <Route path='/dashboard/Dashboard' component={Dashboard} />
   		       </Switch>
			</div>

			</Router>
		);
	}
}

export default App;
