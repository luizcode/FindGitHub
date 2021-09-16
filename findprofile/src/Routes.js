import React from 'react';
import {
    BrowserRouter as BRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from './Pages/Home.jsx';
import UserPage from './Pages/UserPage.jsx';
// import Repos from './Pages/Repos'

const Routes = () => (
    <BRouter>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/Userpage" component={ UserPage } />
            {/* <Route path="/Userpage/Repos" component={ Repos } /> */}
        </Switch>
    </BRouter>
);

export default Routes;