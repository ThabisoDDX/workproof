import React from 'react';

import './Leave.css';

/* Media */
import tick from './tick.svg';

const Leave = () => {
    return (
            <div>
                <section className="leave">
                    <article className="history">
                        <header>
                            <h3>Leave History</h3>
                            <ul>
                                <li>All</li>
                                <li>Leave</li>
                                <li>Sick</li>
                            </ul>
                        </header>
                        <div className="table">
                        <ul>
                            <li>
                                <mark><img src={tick} alt="sick" /></mark>
                                <span>Annual</span>
                            </li>
                            <li>From</li>
                            <li>Till</li>
                            <li>Status</li>
                        </ul>
                        <ul>
                            <li>
                                <mark><img src={tick} alt="sick" /></mark>
                                <span>Sick</span>fever and headache
                            </li>
                            <li>18/02/1994</li>
                            <li>18/02/1994</li>
                            <li>Approve</li>
                        </ul>
                        <ul>
                            <li>
                                <mark><img src={tick} alt="sick" /></mark>
                                <span>Leave</span>fever and headache
                            </li>
                            <li>18/02/1994</li>
                            <li>18/02/1994</li>
                            <li>Approve</li>
                        </ul>
                        <ul>
                            <li>
                                <mark><img src={tick} alt="sick" /></mark>
                                <span>Compassionate</span>fever and headache
                            </li>
                            <li>18/02/1994</li>
                            <li>18/02/1994</li>
                            <li>Approve</li>
                        </ul>
                        </div>
                    </article>
                <section className="balance">
                    <article>
                        <figure>
                            <h4>11</h4>
                            <p>Leave Balance</p>
                        </figure>
                        <ul>
                            <li>Days remaining <span>11 Days</span></li>
                            <li>Days remaining <span>11 Days</span></li>
                        </ul>
                        <button><img src={tick} alt="apply leave" />apply leave</button>
                    </article>
                </section>
                </section>
        </div>
    );
}

export default Leave;