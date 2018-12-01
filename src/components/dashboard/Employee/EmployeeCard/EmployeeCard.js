import React from 'react';

import './EmployeeCard.css';

import verified from './verified.svg';
import star from './star.svg';
import briefcase from './briefcase.svg';
import weekgraph from './weekgraph.svg';

const EmployeeCard = (props) => {
    return (
            <div className="employee-card">
                    <figure>
                        <img src={weekgraph} alt="linegraph" />
                    </figure>
                    <header>
                        <h3>{props.firstname} {props.lastname}</h3>
                        <h4>DESIGNER</h4>
                        <p><img src={star} alt="star" /><span>3.0</span></p>
                    </header>
                    <ul className="scores">
                        <li><img src={verified} alt="arrowup" /><span>9.5</span></li>
                        <li><img src={briefcase} alt="briefcase" /><span>2.0</span></li>
                        <li><img src={verified} alt="verified" /><span>2</span></li>
                    </ul>
                    <footer>
                        <img src={verified} alt="verified" />
                        <h4>Message</h4>
                    </footer>
                </div>
    );
}

export default EmployeeCard;