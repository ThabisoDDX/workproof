import React from 'react';

import './Overrall.css';

import verified from './verified.svg';
import linegraph from './linegraph.svg';
import arrownavigate from './arrownavigate.svg';

const Overrall = () => {
    return (
        <article className="overrall-card">
        <div>
            <header>
                <img src={verified} alt="verified" />
                <h4>Overall Performance</h4>
                <a href="/">see more...</a>
            </header>
            <div className="annual">
                <a href="/">annual</a>
                <img src={arrownavigate} alt="arrownavigate" /> 
            </div>
        </div>
        <div className="graph">
            <h3>10 000</h3>
            <figure>
                <img src={linegraph} alt="line-graph" />
            </figure>
            <ul>
                <li>J</li>
                <li>F</li>
                <li>M</li>
                <li>A</li>
                <li>M</li>
                <li>J</li>
                <li>J</li>
                <li>A</li>
                <li>S</li>
                <li>N</li>
                <li>D</li>
            </ul>
        </div>
</article>
    );
}

export default Overrall;