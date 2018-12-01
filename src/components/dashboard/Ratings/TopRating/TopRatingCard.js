import React from 'react';

import star from './star.svg';
import briefcase from './briefcase.svg';
import verified from './verified.svg';

const TopRatingCard = ({ onRouteChange }) => {
    return (
        <div className="top-card">
        <div className="top-title">
        <figure>
            
        </figure>
        <ul>
            <li><h3>Della Thornton</h3></li>
            <li><h4>DESIGNER</h4></li>
            <li><img src={star} alt="star" /><span>9.5</span></li>
        </ul>
        </div>
        <ul className="scores">
            <li><img src={verified} alt="arrowup" /><span>9.5</span></li>
            <li><img src={briefcase} alt="briefcase" /><span>2.0</span></li>
            <li><img src={verified} alt="verified" /><span>2</span></li>
        </ul>
    </div>
    );
}

export default TopRatingCard;