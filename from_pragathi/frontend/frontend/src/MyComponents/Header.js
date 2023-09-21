import React from 'react';
import './Header.css';
import SearchOrganization from '../SearchOrganization';
export default function Header() {
    return (
        <>
            <div className="headerright">
                <p>Location:</p>
                <p>Contact Details</p>
                <p>Email</p>
            </div>
            <div className="header">
                <h3>Organization Name</h3>
                <h3>Department Name</h3>
            </div>
            <br>
            </br>
            <hr></hr>
            <div>
            </div>


        </>
    )
}
