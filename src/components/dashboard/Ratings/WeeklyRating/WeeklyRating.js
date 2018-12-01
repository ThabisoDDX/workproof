import React from 'react';

import './WeeklyRating.css';

import verified from './verified.svg';
import arrownavigate from './arrownavigate.svg';
import weekgraph from './weekgraph.svg';


const WeeklyRating = ({ onRouteChange }) => {
    return (
        <article className="weekly">
            <div className="weekly-card">
                    <header>
                        <img src={verified} alt="verified" />
                        <h4>Message</h4>
                    </header>
                    <div className="week">
                        <a href="/">week</a>
                        <img src={arrownavigate} alt="arrownavigate" /> 
                    </div>
                    <div className="graph">
                    <h3>365</h3>
                    <figure>
                        <img src={weekgraph} alt="linegraph" />
                    </figure>
                    <a href="/">see all</a>
                </div>
                </div>
                <div className="weekly-card">
                    <header>
                        <img src={verified} alt="verified" />
                        <h4>Message</h4>
                    </header>
                    <div className="week">
                        <a href="/">week</a>
                        <img src={arrownavigate} alt="arrownavigate" /> 
                    </div>
                    <div className="graph">
                    <h3>365</h3>
                    <figure>
                        <img src={weekgraph} alt="linegraph" />
                    </figure>
                    <a href="/">see all</a>
                </div>
                </div>
                <div className="weekly-card">
                    <header>
                        <img src={verified} alt="verified" />
                        <h4>Message</h4>
                    </header>
                    <div className="week">
                        <a href="/">week</a>
                        <img src={arrownavigate} alt="arrownavigate" /> 
                    </div>
                    <div className="graph">
                    <h3>365</h3>
                    <figure>
                        <img src={weekgraph} alt="linegraph" />
                    </figure>
                    <a href="/">see all</a>
                </div>
                </div>
        </article>
    );
}

export default WeeklyRating;