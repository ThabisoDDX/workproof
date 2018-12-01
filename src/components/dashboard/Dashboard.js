import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Employee from './Employee/Employee';
import Ratings from './Ratings/Ratings';

import './Dashboard.css';
import Headcount from './Employee/Heacount/Headcount';

const Dashboard = ({ onRouteChange }) => {
    return (
        <BrowserRouter>
            <div className="dashboard">
            <Header onRouteChange={onRouteChange} />
            <Sidebar />
                <main className="main-content">
                    <Route exact path='/' component={Employee} />
                    <Route path='/rating' component={Ratings} />
                    <Route path='/headcount' component={Headcount} />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default Dashboard;