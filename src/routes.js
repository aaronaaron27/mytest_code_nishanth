import React from 'react';
import { Route } from 'react-router';

/**
 * Import all page components here
 */
import App from './App';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={Login}>
    <Route path="/login/Login" component={Login} />
    <Route path="/dashboard/Dashboard" component={Dashboard} />
  </Route>
);
