import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';

import logo from './logo.svg';
import card from './id-card.svg';
import statistics from './statistics.svg';

const Sidebar = () => {
    return(
        <aside className="sidebar">
            <ul>
                <li className="logo">
                    <Link to="/">
                        <figure>
                            <img src={logo} alt="logo" />
                        </figure>
                    </Link>
                </li>
                
                <li>
                    <Link to="/">
                        <figure>
                            <img src={card} alt="id-card" />
                        </figure>
                    </Link>
                </li>
                
                <li>
                    <Link to="/rating">
                    <figure>
                        <img src={statistics} alt="id-card" />
                    </figure>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
