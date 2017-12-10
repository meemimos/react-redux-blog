import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import { HomePage } from './home/HomePage';
import SignupPage from './signup/SignupPage';

const routes = (
    <Route path='/' component={App}>
        <IndexRoute component={HomePage} />
        <Route path='signup' component={SignupPage} />
    </Route>
);

export default routes;