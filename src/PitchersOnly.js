import React from 'react';
import { Link } from 'react-router-dom';

const PitchersOnly = (props) => {

    const pitcherListItem = props.pitcherList.map((pitcherName, index) => {
        return (
            <li key={index}>
                <Link to={`/pitchers/${pitcherName}`}>{pitcherName}</Link>
            </li>
        )
    })

    return (
        <div>
            <h1>New York Mets Pitchers</h1>
            <ul>
                {pitcherListItem}
            </ul>
        </div>
    )
};

export default PitchersOnly;