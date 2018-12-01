import React from 'react';
import EmployeeID from './EmployeeID/EmployeeID';
import Leave from './Leave/Leave';

import './Employee.css';

const Employee = () => {
    return (
            <div>
                <EmployeeID />
                <Leave />
            </div>
    );
}

export default Employee;