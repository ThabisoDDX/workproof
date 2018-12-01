import React from 'react';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import { personal } from './personal.js'

import './Headcount.css'

const Headcount = ({ onRouteChange }) => {
    return (
        <section className="headcount">
            <EmployeeCard 
                id={personal[0].id} 
                firstname={personal[0].firstname} 
                lastname={personal[0].lastname}
            />
             <EmployeeCard 
                id={personal[1].id} 
                firstname={personal[1].firstname} 
                lastname={personal[1].lastname}
            />
            <EmployeeCard 
                id={personal[2].id} 
                firstname={personal[2].firstname} 
                lastname={personal[2].lastname}
            />
             <EmployeeCard 
                id={personal[3].id} 
                firstname={personal[3].firstname} 
                lastname={personal[3].lastname}
            /> 
            <EmployeeCard 
                id={personal[0].id} 
                firstname={personal[0].firstname} 
                lastname={personal[0].lastname}
            />
             <EmployeeCard 
                id={personal[1].id} 
                firstname={personal[1].firstname} 
                lastname={personal[1].lastname}
            />
            <EmployeeCard 
                id={personal[2].id} 
                firstname={personal[2].firstname} 
                lastname={personal[2].lastname}
            />
             <EmployeeCard 
                id={personal[3].id} 
                firstname={personal[3].firstname} 
                lastname={personal[3].lastname}
            />   
            <EmployeeCard 
                id={personal[0].id} 
                firstname={personal[0].firstname} 
                lastname={personal[0].lastname}
            />
             <EmployeeCard 
                id={personal[1].id} 
                firstname={personal[1].firstname} 
                lastname={personal[1].lastname}
            />
            <EmployeeCard 
                id={personal[2].id} 
                firstname={personal[2].firstname} 
                lastname={personal[2].lastname}
            />
             <EmployeeCard 
                id={personal[3].id} 
                firstname={personal[3].firstname} 
                lastname={personal[3].lastname}
            />     
        </section>
    );
}

export default Headcount;