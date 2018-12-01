import React from 'react';

import './EmployeeID.css'

import avatar1 from './avatar1.png';
import verified from './verified.svg';
import briefcase from './briefcase.svg';
import awards from './awards.svg';
import mail from './mail.svg';
import location from './location.svg';
import smartphone from './smartphone.svg';
import tick from './tick.svg';

const EmployeeID = () => {
    return(
        <section className="employee">
        <article className="card">
            <figure>
                <img src={avatar1} alt="avatar" />
            </figure>
            <header>
                <h3>Waynr Atkins</h3>
                <h4>Designer | Based in JHB</h4>
                <p>Active since 01/12/2018</p>
            </header>
            <ul className="rankings">
                <li><mark><img src={verified} alt="verified" /></mark><span>2</span></li>
                <li><mark><img src={briefcase} alt="briefcase" /></mark>2</li>
                <li><mark><img src={awards} alt="awards" /></mark>2</li>
            </ul>
            <ul className="contact">
                <li><mark><img src={smartphone} alt="smartphone" /></mark><span>+27 011 895 1011</span></li>
                <li><mark><img src={mail} alt="mail" /></mark><span>waynr.artkins@taevo.co.za</span></li>
                <li><mark><img src={location} alt="location" /></mark><span>304 Oak Ave | Ferandale | Randburg</span></li>
            </ul>
        </article>
        <article className="information">
            <h3>Basic information</h3>
            <ul>
                <li>First Name</li>
                <li>Waynr</li>
            </ul>
            <ul>
                <li>Last Name</li>
                <li>Atkins</li>
            </ul>
            <ul>
                <li>Date of Birth</li>
                <li>01/12/1994</li>
            </ul>
            <ul>
                <li>Nationality</li>
                <li>South Africa</li>
            </ul>
        </article>
        <article className="information">
            <h3>Company information</h3>
            <ul>
                <li>Role</li>
                <li>UX Designer</li>
            </ul>
            <ul>
                <li>Team</li>
                <li>Digital & Advertising</li>
            </ul>
            <ul>
                <li>Office</li>
                <li>Johannesburg</li>
            </ul>
            <ul>
                <li>Employment Type</li>
                <li>Permanent</li>
            </ul>
        </article>
        <article className="working-week">
            <h3>Working Week</h3>
            <ul>
            <li><mark><img src={tick} alt="tick" /></mark><span>MON</span></li>
            <li><mark><img src={tick} alt="tick" /></mark><span>TUE</span></li>
            <li><mark><img src={tick} alt="tick" /></mark><span>WED</span></li>
            <li><mark><img src={tick} alt="tick" /></mark><span>THU</span></li>
            <li><mark><img src={tick} alt="tick" /></mark><span>FRI</span></li>
            <li className="sat"><mark><img src={tick} alt="tick" /></mark><span>SAT</span></li>
            <li className="sun"><mark><img src={tick} alt="tick" /></mark><span>SUN</span></li>
            </ul>
        </article>
    </section>
    );
}

export default EmployeeID;
