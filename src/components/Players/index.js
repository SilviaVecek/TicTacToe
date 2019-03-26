import React from 'react';
import './styles.scss';

export const PlayerNames = ({ onChange, value}) => (
    <div className="players">
        <input className="players--name" type="text" onChange={(e) => onChange(e.target.value)} value={value}/>
    </div>
);


const Players = ({ playerName1, setPlayerName1, playerName2, setPlayerName2 }) => {
    return (
        <div>
            {playerName1}{playerName2}
        </div>
    );
}

export default Players;