import React, { Component } from 'react';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Dashboard />
			</div>
		);
	}
}

export default App;
