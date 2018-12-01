import React from 'react';

import './TopRating.css';

import verified from './verified.svg';
import arrownavigate from './arrownavigate.svg';
import TopRatingCard from './TopRatingCard';

const TopRating = () => {
    return (
        <article className="top-ratings">
            <header>
                <ul>
                    <li><img src={verified} alt="arrowup" /></li>
                    <li><h4>TopRating Performance</h4></li>
                </ul>
                <ul>
                    <li>all time</li>
                    <li><a href="/"><img src={arrownavigate} alt="arrownavigate" /></a></li>
                </ul>
            </header>
            <TopRatingCard />
            <TopRatingCard />
            <TopRatingCard />
            <TopRatingCard />
        </article>
    );
}

export default TopRating;