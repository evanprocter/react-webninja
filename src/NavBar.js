import React from 'react';
import {
    Link
} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About The Mets</Link></li>
            <li><Link to="/pitchers">Pitchers</Link></li>
        </ul>
    )
}

export default NavBar;