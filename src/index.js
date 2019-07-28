import React from 'react';
import ReactDOM from 'react-dom';
//import { Router } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.sass';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
(
	<Router>
		<App />
	</Router>
	
), 
	document.getElementById('root')
);
registerServiceWorker();
