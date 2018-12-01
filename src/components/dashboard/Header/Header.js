import React from 'react';
import './Header.css';

import avatar from './avatar.svg';

const Header = ({ onRouteChange }) => {

    return (
        <header className="masthead">
        <nav className="menu">
            <ul>
                <li>Project Name</li>
                <li>Another Project</li>
                <li>Another Name</li>
            </ul>
        </nav>
        <section className="profile">
            <ul className="member">
                <li>
                    <figure>
                        <img src={avatar} alt="avatar" />
                    </figure>
                </li>
                <li>Jane Doe</li>
                <li onClick={() => onRouteChange('signin')}>Sign Out</li>
            </ul>
        </section>
    </header>
    );
}

export default Header;
