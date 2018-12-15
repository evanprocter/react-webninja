import React from 'react';

const OnePitcher = (props) => {
    const pitcherInfo = props.pitcherInfo;
    const pitcherName = props.match.params.pitcherName;
    const onePitcherInfo = pitcherInfo[pitcherName];
    const pitcherStatList = onePitcherInfo.stats.map(pitchers => {
        return (
            <li>{pitchers}</li>
        );
    });
    return (
        <div>
            <h1>Pitcher: {props.match.params.pitcherName}</h1>
            <h2>2018 Regular Season Stats:</h2>
            <ul>
                {pitcherStatList}
            </ul>
        </div>
    );
};

export default OnePitcher;