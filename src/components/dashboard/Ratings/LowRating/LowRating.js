import React from 'react';

import './LowRating.css'

import verified from './verified.svg';
import EmployeeCard from '../../Employee/EmployeeCard/EmployeeCard';

const LowRating = () => {
    return (
        <article className="low-rating">
            <header>
                <img src={verified} alt="verified" />
                <h3>Low Performance</h3>
            </header>
           <EmployeeCard />
           <EmployeeCard />
           <EmployeeCard />
           <EmployeeCard />
        </article>
    );
}

export default LowRating;